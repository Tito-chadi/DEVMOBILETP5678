import * as Location from "expo-location";
import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";
import AppBar from "../components/AppBar";

export default function LocationScreen() {
    const [location, setLocation] = useState(null);

    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") return;

        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);
    };

    return (
        <View style={{ flex: 1 }}>
            <AppBar title="Localisation" back />
            <View style={styles.container}>
                <Button title="Obtenir position" onPress={getLocation} />
                {location && (
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationText}>
                            Latitude: {location.latitude.toFixed(6)}
                        </Text>
                        <Text style={styles.locationText}>
                            Longitude: {location.longitude.toFixed(6)}
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    locationContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
    },
    locationText: {
        fontSize: 16,
        marginBottom: 5,
    },
});