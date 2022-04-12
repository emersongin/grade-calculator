import { Text, View } from 'react-native';
import GradeCalculator from '../components/GradeCalculator';
import TabNavigator from '../components/TabNavigator';

export default function Main() {
    return (
        <View>
            <GradeCalculator/>
            <TabNavigator/>
        </View>
    );
}