import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBthphS9bFQxCjngqCKJDS2I_NJ1tpTnUc",
  authDomain: "npbynatipina.firebaseapp.com",
  projectId: "npbynatipina",
  storageBucket: "npbynatipina.appspot.com",
  messagingSenderId: "225081192478",
  appId: "1:225081192478:web:ebb7fd7b35958fc2f0be0f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
/* usememo react callback */