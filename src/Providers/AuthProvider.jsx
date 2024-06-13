import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getRedirectResult, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const GoogleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const GithubSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        setLoading(true)
        signInWithRedirect(auth, googleProvider);
        return getRedirectResult(auth);

    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('Observing current user', currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            setLoading(false);
            if(currentUser){
                axios.post('https://gofind-server.vercel.app/jwt',loggedUser,{withCredentials:true})
                .then(()=>{
                    // console.log(res.data)
                })
            }
            else{
                axios.post('https://gofind-server.vercel.app/logout',loggedUser,{withCredentials: true})
                .then(()=> {
                    // console.log(res.data)
                })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, signIn, loading, createUser, GoogleSignUp, GithubSignUp, googleSignIn, setLoading, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,

}