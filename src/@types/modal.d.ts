export type ModalContextType = {
    changeModalType: (modal: string) => void;
    modalType: string | null;
    setModalType: React.Dispatch<React.SetStateAction<string | null>>;
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
};