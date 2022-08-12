import {ActivityIndicator, StyleSheet, View,Text} from 'react-native'

import { Colors } from '../../constants/styles';
function LoadingOverlay({message}){
    return(
    <View style={styles.container}>
        <Text>{message}</Text>
        <ActivityIndicator color='white' size='large'/>
    </View>);
}
export default LoadingOverlay;
const styles=StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary100,
    }
})