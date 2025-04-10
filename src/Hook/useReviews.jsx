import axios from "axios";
import React, { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/reviews`).then((res) => {
      setLoading(false);
      setReviews(res.data);
    });
  }, []);

  return [reviews, loading];
};

export default useReviews;
