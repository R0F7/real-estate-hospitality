import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.confige";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log(currentUser);
            setLoader(false);
        });

        return () => {
            unSubscribe()
        }

    }, [])

    const authInfo = {
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        user,
        logOut,
        loader,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;

