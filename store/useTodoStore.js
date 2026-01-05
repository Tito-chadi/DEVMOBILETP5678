import { create } from "zustand";
import * as SQLite from "expo-sqlite";
import {
    fetchTodosFromFirestore,
    addTodoToFirestore,
} from "../services/firestore";

const db = SQLite.openDatabaseSync("todos.db");

export const useTodoStore = create((set, get) => ({
    todos: [],

    initDatabase: () => {
        db.execSync(`
            CREATE TABLE IF NOT EXISTS todos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                createdAt INTEGER
            );
        `);
    },

    loadTodos: async (uid) => {
        try {
            // Charger Firestore
            const remoteTodos = await fetchTodosFromFirestore(uid);

            // Injecter SQLite
            db.execSync("DELETE FROM todos");
            remoteTodos.forEach((t) => {
                db.runSync(
                    "INSERT INTO todos (title, createdAt) VALUES (?, ?)",
                    [t.title, t.createdAt]
                );
            });

            // Charger SQLite vers Zustand
            const localTodos = db.getAllSync("SELECT * FROM todos");
            set({ todos: localTodos });
        } catch (error) {
            console.error("Error loading todos:", error);
        }
    },

    addTodo: async (uid, title) => {
        if (!title.trim()) return;

        try {
            // SQLite
            db.runSync("INSERT INTO todos (title, createdAt) VALUES (?, ?)", [
                title,
                Date.now(),
            ]);

            // Firestore
            await addTodoToFirestore(uid, { title });

            // Refresh
            get().loadTodos(uid);
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    },
}));