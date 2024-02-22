import { useEffect, useState } from "react";

import { login, register } from "../services/auth.service";
import { getInfo } from "../services/user.service";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const checkAuthentication = async () => {
    try {
      const response = await getInfo();
      const user = response.data.user;

      setUser(user);
    } catch (err) {
      localStorage.removeItem("accessToken");
    }
    setIsInitialized(true);
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  const signIn = async (data) => {
    const response = await login(data);

    setUser(response.data.user);
    localStorage.setItem("accessToken", response.data.token);
  };

  const signUp = async (data) => {
    await register(data);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  return { user, setUser, signIn, signUp, signOut, isInitialized };
};

export default useAuth;
