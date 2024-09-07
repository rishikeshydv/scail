import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import Signup from "@/firebase/auth/signup";
async function AddUser (email:string, f_name:string, l_name:string, password:string,role:string): Promise<number> {
    //we check if the user is already in the database
    const userRef = collection(db, "User_Info");
    const userDocRef = doc(userRef, email);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
        console.log("User already exists");
        return 1;
    }
    
    //we sign them up
    await Signup(email, password);
    //we add the user info database
    const today = new Date();
    // const userRef = collection(db, "User_Info");
    // const userDocRef = doc(userRef, email);
    await setDoc(userDocRef, {
        f_name: f_name,
        l_name: l_name,
        email: email,
        password: password,
        role: role,
        date: today.toDateString(),
    });
    return 2;
}

export default AddUser;