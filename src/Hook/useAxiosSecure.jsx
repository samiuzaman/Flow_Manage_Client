import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { handleSignOut } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log(
          "error catch our very onw axios interceptors -->",
          error.response
        );
        if (error.response.status === 401 || error.response.status === 403) {
          // logout
          handleSignOut();
          // navigate
          navigate("/login");
        }
      }
    );
  }, [handleSignOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
