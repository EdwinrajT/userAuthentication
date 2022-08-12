import { Pressable, StyleSheet, View,Text } from 'react-native'
import { Colors } from '../../constants/styles';
function FlatButton({ children, onPress }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
            <View >
                <Text style={styles.textStyles}>{children}</Text>
            </View>
        </Pressable>
    );
}
export default FlatButton;

const styles = StyleSheet.create({
    container: {
        marginVertical: 6,
        padding: 5,

    },
    textStyles: {
        textAlign: 'center',
        color: Colors.primary100,
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: Colors.primary500,
    }
})