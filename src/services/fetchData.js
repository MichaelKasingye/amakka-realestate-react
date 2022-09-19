/* eslint-disable no-unused-vars */

import app from "../config/firebase";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore();

export async function getData(collectionName) {
  const data = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    // console.log({ ...doc.data(), id: doc.id });
    return data.push({ ...doc.data(), id: doc.id });
  });

  return data;
}

export async function getSpecificData(collectionName, id) {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

const data = { ...docSnap.data(), id: docSnap.id };
return data;
}

export async function postData(collectionName, dataObject) {
  const docRef = await addDoc(collection(db, collectionName), dataObject);
}