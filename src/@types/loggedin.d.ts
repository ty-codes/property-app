export type LoggedInContextType = {
    isLoggedIn: string | null;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<string | null>>;
};