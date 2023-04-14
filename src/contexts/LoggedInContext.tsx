import {useContext, useState, createContext, ReactNode, useEffect} from 'react';
import { LoggedInContextType } from '../@types/loggedin';
import { getFromStorage } from '../constants';

export const LoggedInContext = createContext<LoggedInContextType | null>(null);

const LoggedInProvider = ({ children }: {children: ReactNode}) => {
    const [isLoggedIn, setIsLoggedIn] = useState<string | null>(getFromStorage("token"));

    return (
    <LoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
    </LoggedInContext.Provider>
    )
};

export const useLoggedInContext = () => {
	return useContext(LoggedInContext);
};
export default LoggedInProvider;