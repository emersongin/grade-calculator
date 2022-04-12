import { Text, View } from 'react-native';
import DisplayResult from './DisplayResult';
import Calculator from './DisplayResult';

export default function GradeCalculator() {
    return (
        <View>  
            <DisplayResult/>
            <Calculator/>
        </View>
    );
}