export type CurrencyContextType = {
    currency: string | null;
    setCurrency: React.Dispatch<React.SetStateAction<string | null>>;
};