import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(() => {
        // Initialize the state with a value from localStorage if available
        const storedLoginState = localStorage.getItem('isUserLoggedIn');
        return storedLoginState ? JSON.parse(storedLoginState) : false;
    });

    useEffect(() => {
        // Update localStorage whenever isUserLoggedIn changes
        localStorage.setItem('isUserLoggedIn', JSON.stringify(isUserLoggedIn));
    }, [isUserLoggedIn]);

    const login = () => {
        console.log("Called");
        setIsUserLoggedIn(true);
    };

    const logout = () => {
        setIsUserLoggedIn(false);
    };

    const userValue = useMemo(() => ({ isUserLoggedIn, login, logout }), [isUserLoggedIn]);

    return (
        <UserContext.Provider value={userValue}>
            {children}
        </UserContext.Provider>
    );
};
