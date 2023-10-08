import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="bg-base-200">
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default Root;
