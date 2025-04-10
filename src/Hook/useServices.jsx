import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/services`).then((res) => {
      setLoading(false);
      setServices(res.data);
    });
  }, []);

  return [services, loading];
};

export default useServices;
