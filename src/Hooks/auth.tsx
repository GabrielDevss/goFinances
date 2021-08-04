import React, { createContext, ReactNode, useContext } from 'react';
import * as AuthSession from 'expo-auth-session';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextProps {
  user: User;
  singInWithGoogle(): Promise<void>;
}

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
    const user = {
      id: '3216456321',
      name: 'Gabriel Oliveira',
      email: 'gabriel@gmail.com',
    }


  async function singInWithGoogle() {
    try {
      const CLIENT_ID = 'ar508r805iqktc0m15f2bh6bjrhis0uf.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@gabrieldevelopers/gofinances';
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      AuthSession.startAsync({ authUrl });

    }catch (error) {
      throw new Error(error);
    }
  }

  
  return(
    <AuthContext.Provider value={{ 
      user,
      singInWithGoogle  
    }}>
      { children }
    </AuthContext.Provider>

  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };