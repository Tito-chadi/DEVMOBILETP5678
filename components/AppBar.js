import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AppBar({ title, onLogout }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onLogout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    logoutText: {
        fontSize: 16,
        color: "blue",
    },
});