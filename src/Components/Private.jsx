import { useContext } from "react";
import { context } from "../ContextProvider/Provider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Private = ({ children }) => {
  const { user, loading } = useContext(context);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center bg-white">
        <span className="loading loading-spinner text-[#135e8a] mt-36 pt-36 pl-36"></span>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

Private.propTypes = {
  children: PropTypes.node,
};

export default Private;
