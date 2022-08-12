import { Text,View } from "react-native";
import axios from 'axios';
import { useContext, useEffect,useState } from "react";
import { AuthContext } from "../store/auth-context";
function WelcomeScreen(){
    
    const [fetchedData,setFetchedData]=useState('');
    const authctnt=useContext(AuthContext);
    const tokenUser=authctnt.token;
    useEffect(()=>{
        axios.get('https://mobile-app-52882-default-rtdb.firebaseio.com/message.json?auth='+tokenUser).then((response)=>setFetchedData(response.data));
    },[])
    
    return(
        <View>
            <Text>Welcome</Text>
            <Text>{fetchedData}</Text>
        </View>
    );
}
export default WelcomeScreen;