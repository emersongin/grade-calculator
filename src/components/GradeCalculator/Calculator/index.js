import styles from './style';
import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function Calculator(props) {
    const [nota1, onChangeNota1] = useState(null);
    const [nota2, onChangeNota2] = useState(null);
    const [nota3, onChangeNota3] = useState(null);

    const calculate = () => {
        let value1 = parseInt(nota1);
        let value2 = parseInt(nota2);
        let value3 = parseInt(nota3);

        let media = ((value1 + value2 + value3) / 3).toFixed(1);

        props.calculateAverage(media);
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Calcular Média</Text>
            <View style={styles.contentInputs}>
                <TextInput
                    style={styles.input}
                    keyboardType = 'numeric'
                    maxLength = {2}
                    onChangeText={onChangeNota1}
                    value={nota1}
                />
                <TextInput
                    style={styles.input}
                    keyboardType = 'numeric'
                    maxLength = {2}
                    onChangeText={onChangeNota2}
                    value={nota2}
                />
                <TextInput
                    style={styles.input}
                    keyboardType = 'numeric'
                    maxLength = {2}
                    onChangeText={onChangeNota3}
                    value={nota3}
                />
            </View>
            <Button color="#E06839" title="Calcular Média" onPress={calculate}/>
        </View>
    );
}
