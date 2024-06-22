import {createContext, useState, Dispatch, useEffect} from 'react';
import {auth} from '../config/firebase';

export const MainContext = createContext<MainContextType | null>(null);

interface IAppProvider {
  children: React.ReactNode;
}
type MainContextType = {
  isAuth: boolean;
  setIsAuth: Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
  uid: string | null;
  setUid: Dispatch<React.SetStateAction<string | null>>;
};

export const MainProvider: React.FC<IAppProvider> = ({children}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [uid, setUid] = useState<string | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuth(true);
        setUid(user.uid);
        setIsLoading(true);
      } else {
        setIsAuth(false);
        setIsLoading(false);
        setUid(null);
      }
    });
  }, []);

  return (
    <MainContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
        setIsLoading,
        uid,
        setUid,
      }}>
      {children}
    </MainContext.Provider>
  );
};
