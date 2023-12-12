import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../ContextProvider/Provider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logOutUser } = useContext(context);
  const NavLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? " underline underline-offset-4 decoration-white " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blogs"}
          className={({ isActive }) =>
            isActive ? " underline underline-offset-4 decoration-white " : ""
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? " underline underline-offset-4 decoration-white " : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to={"/addBlog"}
              className={({ isActive }) =>
                isActive
                  ? " underline underline-offset-4 decoration-white "
                  : ""
              }
            >
              Add Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/myClass"}
              className={({ isActive }) =>
                isActive
                  ? " underline underline-offset-4 decoration-white "
                  : ""
              }
            >
              My Classes
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  const handleLogOut = () => {
    logOutUser()
      .then(() => toast("Logout Successfully!"))
      .catch((err) => toast(err.code));
  };
  return (
    <div>
      <div className="navbar bg-[#135e8a] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost px-2 md:px-4 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-[#135e8a] rounded-box"
            >
              {NavLinks}
            </ul>
          </div>
          <a className=" normal-case text-medium md:text-2xl  ">RHR-EDU</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{NavLinks}</ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <>
              <p className="text-xs md:text-xl">{user?.displayName}</p>
              <img
                className="w-12 rounded-full mr-3"
                src={user?.photoURL}
                alt=""
              />
              <NavLink
                onClick={handleLogOut}
                className="btn btn-xs md:btn-md normal-case bg-[#013E62] text-white hover:text-black"
              >
                Log Out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to={"/login"}
                className="btn normal-case bg-[#013E62] text-white hover:text-black"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
