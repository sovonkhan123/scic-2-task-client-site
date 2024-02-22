
import { Link, Navigate } from "react-router-dom";
import { app } from "../firebase/Firebase.config";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


const Navbar = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const logOut = () => {
        return signOut(auth);
    };

    const handleOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                Navigate('/')

            })
            .catch(error => console.log(error.message))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => {
            return unsubscribe();
        }
    }, [auth]);
    const options = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/addProduct'>ADD PRODUCTS</Link></li>
        <li><Link to='/cart'>MY CART</Link></li>



    </>
    return (
        <div className="navbar fixed z-20 opacity-70 border-b-2 text-white bg-black max-w-screen-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {options}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl uppercase"><Link to='/'><img className="h-10 w-10 " src="https://i.ibb.co/L0mF2MN/1182612-OSKHFO0.jpg" alt="" /></Link> Dream Automobile</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {options}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>

                                        <span>User Name: {user?.displayName}</span>
                                    </li>
                                    
                                    <li><button onClick={handleOut}>LOGOUT</button></li>
                                </ul>
                            </div>
                        </>
                        :
                        <>
                            <img onClick={handleGoogle} className="w-10" src="https://i.ibb.co/5xHP68J/32704485-m011t0447-b-social-sign-18sep22.jpg" alt="" />
                        </>
                }

            </div>
        </div>
    );

};

export default Navbar;