import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config";
import { sign } from "crypto";

export default async function GoogleSignUp():Promise<string> {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const results = await signInWithPopup(auth,provider);
    const user = results.user;
    const credential = GoogleAuthProvider.credentialFromResult(results);
    const token = credential?.accessToken;
    if (token){
        return token;
    }
    else{
        return "Error";
    }
}

