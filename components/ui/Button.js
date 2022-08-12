import { Pressable, StyleSheet, View,Text } from 'react-native'
import { Colors } from '../../constants/styles';
function Button({ children, onPress }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
            <View >
                <Text style={styles.textStyles}>{children}</Text>
            </View>
        </Pressable>
    );
}
export default Button;

const styles = StyleSheet.create({
    container: {
        
        marginTop:20,
        padding: 5,
        backgroundColor: Colors.primary500,
        borderRadius: 8,
    },
    textStyles: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: Colors.primary100,
    }
})