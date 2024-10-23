import { ReactNode, createContext, useContext, useState } from "react";


interface _IModalContextProps {
  isOpen: (key: string) => boolean;
  setOpen: (key: string, open: boolean) => void;
}
export const ModalContext = createContext<_IModalContextProps | undefined>(undefined);

const ModalProvider = ({ children }: { children: ReactNode }) => {

  const [modalState, setModalState] = useState<{ [key: string]: boolean }>({});

  const setOpen = (key: string, open: boolean) => {
    setModalState((prevState) => ({
      ...prevState,
      [key]: open,
    }));
  };

  const isOpen = (key: string) => modalState[key] || false;

  return (
    <ModalContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export default ModalProvider;
