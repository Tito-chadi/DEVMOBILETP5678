import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";

export default function NativeFeaturesScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <AppBar title="Fonctionnalités natives" back />
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Caméra")}
                >
                    <Text style={styles.buttonText}>📷 Caméra</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Localisation")}
                >
                    <Text style={styles.buttonText}>📍 Géolocalisation</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Contacts")}
                >
                    <Text style={styles.buttonText}>👥 Contacts</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Notifications")}
                >
                    <Text style={styles.buttonText}>🔔 Notifications</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    button: {
        backgroundColor: "#2f80ed",
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
});