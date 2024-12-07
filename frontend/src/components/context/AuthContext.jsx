// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const signIn = () => setIsSignedIn(true);
    const signOut = () => setIsSignedIn(false);

    return (
        <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
}