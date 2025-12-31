import { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/AppBar";
import { AuthContext } from "../context/AuthContext";

export default function TodoListScreen() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            setTodos([
                { id: 1, title: "Faire les courses" },
                { id: 2, title: "Sortir le chien" },
                { id: 3, title: "Coder une app RN" },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 20 }}>Chargement...</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <AppBar title="Mes tâches" onLogout={logout} />
            <View style={{ flex: 1, padding: 20 }}>
                <FlatList
                    data={todos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Details", {
                                    id: item.id,
                                    title: item.title,
                                })
                            }
                        >
                            <Text style={{ padding: 10, fontSize: 18 }}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}