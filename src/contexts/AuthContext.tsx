import React, {createContext, useContext, useState} from 'react';

interface AuthContextProps {
  AccessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC = ({children}) => {
  const [AccessToken, setAccessToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{AccessToken, setAccessToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
