import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, getAuth,updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {app} from '../Firebase/Firebase.config';
import axios from "axios";

export const AuthContext= createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null); 
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    const createUser= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('current user',currentUser)
            if(currentUser){
                axios.post('https://petcare-server.vercel.app/jwt',{email:currentUser.email})
                .then(data=>{
                    console.log(data.data.token)
                    
                    console.log('current user',currentUser)
                    localStorage.setItem('access-token',data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
         
           })
           return ()=>{
            return unsubscribe()
           }
       })
       const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo)
          .then(() => {
            // Update user object with photoUrl if available
            const updatedUser = auth.currentUser;
    
            // Access the photoUrl from the user object
            const photoUrl = updatedUser.photoURL;
    
            // Optionally, you can also update the local state with the new user object
            setUser(updatedUser);
    
            // Return the updated user object or photoUrl as needed
            return updatedUser;
          })
          .catch((err) => {
            setError(err.message);
            throw err;
          })
          .finally(() => setLoading(false));
      };
      const verifyEmail = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
          .then(() => {
            // Verification email sent successfully
          })
          .catch((err) => {
            setError(err.message);
            throw err;
          })
          .finally(() => setLoading(false));
      };
    const authInfo={
          user,
          loading,
          createUser,
          verifyEmail,
          updateUser,
          signIn,
          logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;