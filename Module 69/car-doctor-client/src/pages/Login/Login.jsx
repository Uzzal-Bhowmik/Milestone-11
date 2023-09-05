import React, { useContext } from "react";
import loginPic from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/ContextAuth";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        form.reset();
        alert("Signed In Successfully!");

        const signedUser = { email: result.user?.email };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("car-doctor-access-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero mt-12 mb-20">
      <div className="hero-content flex-col lg:flex-row justify-between lg:w-10/12">
        <div className="w-1/2">
          <img src={loginPic} alt="" className="w-[75%] mx-auto" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login</h1>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p className="text-sm text-center pt-2">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary">
                    Create One
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
