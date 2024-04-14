import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.confige";

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [reload, setReload] = useState(false)
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

    const profileUpdate = (name, photoUrl) => {
        // setLoader(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
            .then(() => {
                setUser(auth.currentUser)
                // console.log(auth.currentUser);
            })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (createUser) {
                setUser(currentUser);
                // console.log(currentUser);
                setLoader(false);
            }
        });

        return () => {
            unSubscribe()
        }

    }, [reload])

    const authInfo = {
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        user,
        logOut,
        loader,
        profileUpdate,
        setUser,
        setReload,
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

