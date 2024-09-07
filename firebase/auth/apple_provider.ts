import { OAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config";

export default async function AppleSignUp():Promise<string> {
    const provider = new OAuthProvider('apple.com');
    // provider.addScope('email');
    // provider.addScope('name');

    const result = await signInWithPopup(auth,provider);
    //const user = result.user;
    const credentials = OAuthProvider.credentialFromResult(result);
    const token = credentials?.accessToken;
    if (token){
        return token;
    }
    else{
        return "Error";
    }
   // console.log(token);
}

