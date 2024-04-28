// src/app/firebase.service.ts
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc, getDoc, getDocs } from 'firebase/firestore';
import {Insurance} from "../models/insurance";
import {Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private db: Firestore = getFirestore(initializeApp({
    "projectId": "webkeretrendszer",
    "appId": "1:189284507022:web:032e7a3708114d1410d8df",
    "storageBucket": "webkeretrendszer.appspot.com",
    "apiKey": "AIzaSyB3YRgAMeQZURLgwiyesSmvmofBvIer7Ow",
    "authDomain": "webkeretrendszer.firebaseapp.com",
    "messagingSenderId": "189284507022"
  }));

  constructor() {}

  addInsurance(insurance: Insurance) {
    const insuranceRef = collection(this.db, 'insurances');
    return addDoc(insuranceRef, insurance);
  }

  async getInsurance(id: string) {
    const docRef = doc(this.db, 'insurances', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  }

  async getAllInsurances() {
    const querySnapshot = await getDocs(collection(this.db, 'insurances'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async updateInsurance(insurance: Insurance) {
    // const insuranceRef = doc(this.db, 'insurances', insurance.id);
    // await updateDoc(insuranceRef, insurance);
  }

  async deleteInsurance(id: string) {
    const insuranceRef = doc(this.db, 'insurances', id);
    await deleteDoc(insuranceRef);
  }
}

export class FirebaseServiceService {
}
