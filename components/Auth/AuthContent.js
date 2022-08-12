import {Alert,StyleSheet, View} from 'react-native'
import { Colors } from '../../constants/styles';
import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
function AuthContent({isLogin,onAuthenticate}){
  const navigation=useNavigation();
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false,
      });
    function switchAuthModeHandler(){
      if(isLogin){
        navigation.replace('Signup');
      }
      else
      {
        navigation.replace('Login');
      }
    }
    function submitHandler(credentials) {
        let { email, confirmEmail, password, confirmPassword } = credentials;
    
        email = email.trim();
        password = password.trim();
    
        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;
        const emailsAreEqual = email === confirmEmail;
        const passwordsAreEqual = password === confirmPassword;
    
        if (
          !emailIsValid ||
          !passwordIsValid ||
          (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
        ) {
          Alert.alert('Invalid input', 'Please check your entered credentials.');
          setCredentialsInvalid({
            email: !emailIsValid,
            confirmEmail: !emailIsValid || !emailsAreEqual,
            password: !passwordIsValid,
            confirmPassword: !passwordIsValid || !passwordsAreEqual,
          });
          return;
        }
        onAuthenticate({ email, password });
      }
    return(
        <View style={styles.container}>
            <AuthForm isLogin={isLogin} credentialsInvalid={credentialsInvalid} onSubmit={submitHandler}/>
            <View>
            <FlatButton onPress={switchAuthModeHandler}>{isLogin ? "Create a new user" : "Log in instead"}</FlatButton>
            </View>
        </View>
    );
}
export default AuthContent;
const styles=StyleSheet.create({
    container:{
        margin:30,
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:Colors.primary800,
        borderRadius:10,
        elevation: 2,
        marginTop:70,
    }
})