// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBQdByiPDkGDyOkq6GR5IoOmg-LJAtnlMQ',
  authDomain: 'shop-addis-8554e.firebaseapp.com',
  projectId: 'shop-addis-8554e',
  storageBucket: 'shop-addis-8554e.appspot.com',
  messagingSenderId: '546344987168',
  appId: '1:546344987168:web:d6d27294380006d03cea45',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
