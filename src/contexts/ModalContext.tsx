import { useContext, useState, createContext, ReactNode, useEffect } from 'react';
import { ModalContextType } from '../@types/modal';

export const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalType, setModalType] = useState<string | null>("");
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const changeModalType = (modal: string) => {
        setIsOpenModal(true);
        setModalType(modal);
    };

    return (
        <ModalContext.Provider value={{ modalType, changeModalType, setModalType, isOpenModal, setIsOpenModal }}>
            {children}
        </ModalContext.Provider>
    )
};

export const useModalContext = () => {
    return useContext(ModalContext);
};

export default ModalProvider;