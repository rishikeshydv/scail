import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export default async function AddEmails(email: string): Promise<number> {
    //we check if the email is already in the database
    const emailRef = collection(db, "newslettersEmails");
    const emailDocRef = doc(emailRef, email);
    const emailDoc = await getDoc(emailDocRef);
    if (emailDoc.exists()) {
        return 1;
    }
    
    //we add the email to the database
    await setDoc(emailDocRef, {
        email: email,
    });
    return 2;
}