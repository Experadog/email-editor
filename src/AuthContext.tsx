import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export interface IContext {
  isLoggedIn: boolean;
  setIsLoggedIn: null | Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IContext>({
  isLoggedIn: false,
  setIsLoggedIn: null,
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
