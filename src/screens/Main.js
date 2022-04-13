import { StyleSheet, Text, View } from 'react-native';
import GradeCalculator from '../components/GradeCalculator';
import TabNavigator from '../components/TabNavigator';

export default function Main() {
    return (
        <View style={styles.background}>
            <GradeCalculator/>
            <TabNavigator/>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
		backgroundColor: "#fff",
	},
});
