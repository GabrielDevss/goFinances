import React, { createContext, ReactNode, useContext, useState } from 'react';
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

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser ] = useState<User>({} as User)


  async function singInWithGoogle() {
    try {
      const CLIENT_ID = '253350342402-ar508r805iqktc0m15f2bh6bjrhis0uf.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@gabrieldevelopers/gofinances';
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

     const { type, params } = await AuthSession
     .startAsync({ authUrl })as AuthorizationResponse;

     if(type === 'success'){
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const userInfo = await response.json();

        setUser({
          id: userInfo.id,
          name: userInfo.given_name,
          email: userInfo.email,
          photo: userInfo.picture,
        });
      }


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