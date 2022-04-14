import styles from './style';
import { Text, View } from 'react-native';
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
