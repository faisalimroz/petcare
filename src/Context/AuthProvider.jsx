import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { app } from '../Firebase/Firebase.config';
export const AuthContext= createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    
    const [user,setUser]=useState(null)
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser =(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }
       
    const logOut =()=>{
        return signOut(auth);
    }
    const verifyEmail=()=>{
        return  sendEmailVerification(auth.currentUser)
        
    
      }
       useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('current user',currentUser)
            setLoading(false)
           })
           return ()=>{
            return unsubscribe()
           }
       })
    const Authinfo = {
        user,
        loading,
        createUser,
        updateUser,
        signIn,
        verifyEmail,
        logOut
    }
    return (

        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;
