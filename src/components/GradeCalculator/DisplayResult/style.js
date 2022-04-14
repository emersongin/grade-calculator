import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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