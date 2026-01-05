import * as Contacts from "expo-contacts";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import AppBar from "../components/AppBar";

export default function ContactsScreen() {
    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status !== "granted") return;

        const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });
        setContacts(data);
    };

    return (
        <View style={{ flex: 1 }}>
            <AppBar title="Contacts" back />
            <View style={styles.container}>
                <Button title="Charger contacts" onPress={loadContacts} />
                <FlatList
                    data={contacts}
                    keyExtractor={(item) => item.id}
                    style={{ marginTop: 20 }}
                    renderItem={({ item }) => (
                        <View style={styles.contactItem}>
                            <Text style={styles.contactName}>{item.name}</Text>
                            {item.phoneNumbers && item.phoneNumbers.length > 0 && (
                                <Text style={styles.contactPhone}>
                                    {item.phoneNumbers[0].number}
                                </Text>
                            )}
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    contactItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    contactName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    contactPhone: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
    },
});