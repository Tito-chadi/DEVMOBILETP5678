import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function AppBar({ title, back = false }) {
    const navigation = useNavigation();
    const { theme } = useContext(ThemeContext);

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                backgroundColor: theme.card,
                borderBottomWidth: 1,
                borderBottomColor: "#eee",
            }}
        >
            {back && (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginRight: 15 }}
                >
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
            )}
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: theme.text,
                    flex: 1,
                }}
            >
                {title}
            </Text>
        </View>
    );
}