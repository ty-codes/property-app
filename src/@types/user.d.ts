export interface IUser {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    gender?: string | null;
    DOB?: string | null
}

export type UserContextType = {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
//     saveUser: (user: IUser) => void;
//     updateUser: (id: number) => void;
}