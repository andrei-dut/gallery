import { updateDoc, setDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../index";


const setData = async (url, value) => {
    const docRef = doc(db, url);
    await setDoc(docRef, value,{ merge: true });
}

const updateData = async (url, value) => {
    const docRef = doc(db, url);
    await updateDoc(docRef, value);
}

const createData = async (url, value) => {
    const docRef = doc(db, url);
    await setDoc(docRef, value);
}

const deleteData = async (url, value) => {
    await deleteDoc(doc(db, url));
}

const readData = async (url, value) => {
    const docRef = doc(db, url);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : "No such document!";
}

export {

}