import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./assets/firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = ( email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signUser = ( email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const out = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])
    const userInfo = {
        user,
        createUser,
        signUser,
        out
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;