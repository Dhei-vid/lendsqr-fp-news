import {createContext, useState, Dispatch, useEffect} from 'react';

export const MainContext = createContext<MainContextType | null>(null);

interface IAppProvider {
  children: React.ReactNode;
}
type MainContextType = {
  isAuth: boolean;
  setIsAuth: Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
};

export const MainProvider: React.FC<IAppProvider> = ({children}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsAuth(true);
    setIsLoading(true);
  }, []);

  return (
    <MainContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </MainContext.Provider>
  );
};
