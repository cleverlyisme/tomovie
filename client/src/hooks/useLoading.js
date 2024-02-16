import { useDispatch } from "react-redux";

import { setLoading } from "../redux/actions/loading.action";

const useLoading = () => {
  const dispatch = useDispatch();

  const setIsLoading = (status) => {
    dispatch(setLoading(status));
  };

  return { setIsLoading };
};

export default useLoading;
