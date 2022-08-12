import { useContext,useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/Auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import {AuthContext} from '../store/auth-context';
function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authctxt=useContext(AuthContext);
    async function signupHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            const token=await createUser(email, password);
            authctxt.authenticate(token);
        }
        catch (error) {
            Alert.alert('Login failed', 'check you input valuess');
            setIsAuthenticating(false);
        }
        
    }
    if (isAuthenticating) {
        return <LoadingOverlay message='creating user....' />
    }
    return (
        <AuthContent onAuthenticate={signupHandler} />
    );
}
export default SignupScreen;