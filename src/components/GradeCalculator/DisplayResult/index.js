import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DisplayResult(props) {

    const display = () => {
        if(!props.media) return '';

        if(props.media >= 7) {
            return 'APROVADO';
        } else if (props.media >= 5) {
            return 'PROVA FINAL';
        } else {
            return 'REPROVADO';
        }

    }

    return (
        <View style={styles.header}>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.3)', 'transparent']}
                style={styles.gradient}
            >
                <Text style={styles.display}>{display()}</Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
	header: {
        marginTop: 24,
        marginBottom: 40,
		height: 48,
        borderRadius: 5,
		width: "100%",
        backgroundColor : "#E06839",
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
	},
    gradient: {
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    display: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
    }
});
