'use client'

import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    const [resUserData, setResUserData] = useState({});
    const [userType, setUserType] = useState({});

    return (
        <AppContext.Provider value={{ resUserData, setResUserData, userType, setUserType }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(AppContext);
}
