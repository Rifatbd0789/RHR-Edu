import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-base-200">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
