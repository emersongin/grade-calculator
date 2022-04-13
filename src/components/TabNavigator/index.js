import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons';

export default function TabNavigator() {
    return (
        <View style={styles.container}>
            <MaterialIcons style={styles.icon} name="add" size={24} color="black" />
            <MaterialIcons style={styles.icon} name="search" size={24} color="black" />
            <MaterialIcons style={styles.icon} name="home" size={24} color="black" />
            <MaterialIcons style={styles.icon} name="notifications" size={24} color="black" />
            <MaterialIcons style={styles.icon} name="person" size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        backgroundColor: '#ccc',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    icon: {
        //
    }
});
