import {useContext, useState, createContext, ReactNode, useEffect} from 'react';
import { UserContextType, IUser } from '../@types/user';
import { setToStorage, getFromStorage} from '../constants';

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: {children: ReactNode}) => {
    const userPlaceholder:IUser = {
        id: 1,
        first_name: "bolatito",
        last_name: "johnson",
        email: "bolatito@gmail.com",
        gender: "female",
        DOB: "Jan 17th 2000"
    }

    // setToStorage("user", userPlaceholder)
    const [user, setUser] = useState<IUser | null>(getFromStorage("user"));
    
	useEffect(() => {
		setToStorage("user", user);
	}, [user]);

    // const saveUser = (user: IUser) => {
    //     const newUser: IUser = {
    //         id: Math.random(),
    //         first_name: user.first_name,
    //         last_name: user.last_name,
    //     }
    //     setUser(newUser)
    // }

    // const updateUser = (id: number) => {

    //         if(user.id === id) {
    //             user.first_name = "changed"
    //             setUser(user)
    //         }
    //     }
    // }

    return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
    )
};

export const useUserContext = () => {
	return useContext(UserContext);
};
export default UserProvider;