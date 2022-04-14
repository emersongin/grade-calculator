import styles from './style';
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
