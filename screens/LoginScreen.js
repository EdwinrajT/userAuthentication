import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useContext, useState } from "react";
import { login } from "../util/Auth";
import { Alert } from "react-native";
import {AuthContext} from '../store/auth-context';
function LoginScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authctxt=useContext(AuthContext);
    async function loginHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            
            const token=await login(email, password);
            authctxt.authenticate(token);
        }
        catch (error) {
            Alert.alert('Login failed', 'check you input valuess');
            setIsAuthenticating(false);
        }
        
    }
    if (isAuthenticating) {
        return <LoadingOverlay message='Logging....' />
    }
    return (
        <AuthContent isLogin onAuthenticate={loginHandler} />
    );
}
export default LoginScreen;