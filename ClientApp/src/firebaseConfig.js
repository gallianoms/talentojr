// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD2WAhhLNCftbqZjngXunfD4OhOIvEOZXc',
  authDomain: 'talentojr-74343.firebaseapp.com',
  projectId: 'talentojr-74343',
  storageBucket: 'talentojr-74343.appspot.com',
  messagingSenderId: '890737777950',
  appId: '1:890737777950:web:1fbc39fd99e706e49a3d0f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
