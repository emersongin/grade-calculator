import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DisplayResult from './DisplayResult';
import Calculator from './Calculator';

export default function GradeCalculator() {
    const [media, setMedia] = useState(null);
    const calculateAverage = (value) => {
        setMedia(value);
    };

    return (
        <View style={styles.box}>  
            <DisplayResult media={media}/>
            <Calculator calculateAverage={ media => calculateAverage(media) }/>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        margin: 20,
        padding: 10,
        borderWidth: 4,
    }
});
