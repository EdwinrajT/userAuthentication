import { TextInput, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

function Input({label,keyboardType,secure,isInvalid,onUpdateValue,value}){
    return (
        <View style={styles.container}>
            <Text style={[styles.textStyles, isInvalid && styles.errorLabel ]}>{label}</Text>
            <TextInput style={[styles.textBoxStyle, isInvalid && styles.errorInput]} 
                keyboardType={keyboardType} 
                autoCorrect={false}
                autoCapitalize='none'
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    );
}
export default Input;

const styles=StyleSheet.create(
    {
        textStyles:{
            marginVertical:5,
            color:Colors.primary100,
        },
        textBoxStyle:{
            paddingVertical:8,
            paddingHorizontal:4,
            backgroundColor:'white',
            borderRadius:8,
            
        },
        container:
        {
            marginVertical:5,
        },
        errorLabel:{
            color:Colors.error500,
        },
        errorInput:{
            backgroundColor:Colors.error100,
        }
    }
)