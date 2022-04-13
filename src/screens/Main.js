import { StyleSheet, ScrollView, Text, View } from 'react-native';
import GradeCalculator from '../components/GradeCalculator';
import GradeInterval from '../components/GradeInterval';
import TabNavigator from '../components/TabNavigator';

export default function Main() {
    return (
        <ScrollView style={styles.background}>
            <GradeCalculator/>
            <GradeInterval/>
            <TabNavigator/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
		backgroundColor: "#fff",
	},
});
