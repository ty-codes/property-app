import { useContext, useState, createContext, ReactNode } from 'react';
import { CurrencyContextType } from '../@types/currency';
import { getFromStorage } from '../constants';

export const CurrencyContext = createContext<CurrencyContextType | null>(null);

const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrency] = useState<string | null>("naira");

    function changeCurrency(amount: number) {
        // replace with an algorithm that calculates 
        // based on current rates
        try {
            if (currency == "naira") {
                return amount;
            } else if (currency == "euro") {
                const result = amount / 450
                return result.toFixed(2);
            } else if (currency == "dollar") {
                const result = amount / 400
                return result.toFixed(2);
            } else {
                throw Error("Currency not supported")
            }
        } catch (err) {
            return err;
        }
    }


    return (
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
            {children}
        </CurrencyContext.Provider>
    )
};

export const useCurrencyContext = () => {
    return useContext(CurrencyContext);
};
export default CurrencyProvider;