import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function IntervalCalculator() {
    const [inteval, onChangeInterval] = useState(null);

    return (
        <View style={styles.box}>
            <Text style={styles.title}>Calcular Intervalo</Text>
            <TextInput
                style={styles.input}
                keyboardType = 'numeric'
                maxLength = {2}
                onChangeText={onChangeInterval}
                value={inteval}
            />
            <Button color="#E06839" title="Calcular Intervalo"/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase',
        color: 'red'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    box: {
        margin: 20,
        borderWidth: 4,
        padding: 10,
    },
});
