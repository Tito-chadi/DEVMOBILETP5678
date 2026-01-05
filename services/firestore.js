import { db } from "./firebase";
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    query,
    where,
} from "firebase/firestore";

export async function fetchTodosFromFirestore(uid) {
    const todosRef = collection(db, "users", uid, "todos");
    const snap = await getDocs(todosRef);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function addTodoToFirestore(uid, todo) {
    const todosRef = collection(db, "users", uid, "todos");
    await addDoc(todosRef, {
        title: todo.title,
        completed: false,
        createdAt: Date.now(),
    });
}

export async function deleteTodoFromFirestore(uid, id) {
    await deleteDoc(doc(db, "users", uid, "todos", id));
}