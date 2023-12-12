import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { context } from "../ContextProvider/Provider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const { createUser, googleLogIn } = useContext(context);
  const [registerError, setregisterError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const Name = form.get("displayName");
    const photo = form.get("photo");

    setregisterError("");

    // password Validation
    if (password.length < 6) {
      setregisterError(
        "Registration Failed !  Password must be more than 6 character !"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setregisterError(
        "Registration Failed !  Password must include at least one Capital letter !"
      );
      return;
    } else if (!/[#?!@$%^&*-]/.test(password)) {
      setregisterError(
        "Registration Failed !  Password must include a special character!"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: Name,
          photoURL: photo,
        })
          .then()
          .catch((error) => setregisterError(error.code));
        e.target.reset();
        toast(`${Name} Successfully Registered !`);
        navigate("/login");
      })
      .catch((error) => setregisterError(error.code));
  };

  const handleGoogleReg = () => {
    setregisterError("");
    googleLogIn()
      .then(() => {
        toast(" Successfully Registered & Logged In!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setregisterError(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-[#29465B]">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Register Here!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name..."
                  className="input input-bordered"
                  name="displayName"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Your photo url..."
                  className="input input-bordered"
                  name="photo"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              {registerError && (
                <p className="text-red-600 font-semibold">{registerError}</p>
              )}
              <div className="form-control mt-6">
                <p className="mb-2">
                  Already Have an account ?{" "}
                  <Link to={"/login"}>
                    <span className="link link-hover text-blue-600 font-bold mb-2">
                      Login Here..
                    </span>
                  </Link>
                </p>
                <button className="btn btn-primary normal-case bg-[#29465B] text-white border-none hover:bg-slate-400 hover:text-black">
                  Register
                </button>
              </div>
            </form>
            <button
              onClick={handleGoogleReg}
              className=" mb-2 mx-2 btn btn-outline normal-case text-[#29465B] border-none  hover:bg-slate-400 hover:text-black"
            >
              <FcGoogle></FcGoogle> Log in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
