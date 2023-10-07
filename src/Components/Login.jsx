import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../ContextProvider/Provider";

const Login = () => {
  const { logInUser } = useContext(context);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    logInUser(email, password)
      .then((res) => console.log(res.operationType, "Successfully !"))
      .catch((err) => console.log(err.code));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-[#29465B]">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Login Here!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
              <div className="form-control mt-6">
                <p className="mb-2">
                  New Here ? Please
                  <Link to={"/register"}>
                    <span className="text-blue-600 font-bold">
                      {" "}
                      Register...
                    </span>
                  </Link>
                </p>
                <button className="btn btn-primary normal-case bg-[#29465B] border-none text-white hover:bg-slate-400 hover:text-black">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
