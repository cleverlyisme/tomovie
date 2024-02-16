import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { doLogin, doLogout } from "../redux/actions/user.action";
import { checkAuth } from "../services/auth.service";

const useAuth = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.account);

  const checkAuthentication = async () => {
    try {
      const res = await checkAuth();

      console.log(res.data);
    } catch (err) {
      console.log(err.message);
      dispatch(doLogout());
      localStorage.removeItem("accessToken");
    }
    setIsInitialized(true);
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  const login = (data) => {
    dispatch(doLogin(data));
  };

  const logout = () => {
    dispatch(doLogout());
  };

  return { user, login, logout, isInitialized };
};

export default useAuth;
