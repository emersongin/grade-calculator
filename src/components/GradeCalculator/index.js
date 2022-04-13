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
        <View style={styles.container}>  
            <DisplayResult media={media}/>
            <Calculator calculateAverage={ media => calculateAverage(media) }/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});
