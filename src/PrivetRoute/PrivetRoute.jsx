import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "keep-react";
import useAuth from "../Hook/useAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="loader">
        <Spinner color="success" />
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivetRoute;
