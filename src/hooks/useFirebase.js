import initializeAuth from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuth()

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const signinUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {

                console.log(result.user);
                setUser(result.user);

            })
    }
    const createUserWithEmail = (email, password, displayName) => {

        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then(result => {
                console.log(result.user);
                // setUser(result.user);
                setUserName(result.user,displayName)
            })
    }
    const setUserName = (details,name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                setUser({ ...details, displayName: name })
            })
    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }
    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                console.log(user);
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])




    return {
        signinUsingGoogle,
        createUserWithEmail,
        user,
        logIn,
        logOut

    }

}
export default useFirebase;