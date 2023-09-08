import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, isLoading, googleSignIn, setIsLoading } =
    useContext(AuthContext);

  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathName || "/";

  // sign up method
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    signIn(email, pass)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Signed In Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        form.reset();
        setIsLoading(false);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.code);
        setIsLoading(false);
      });
  };

  // google sign in
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Signed In Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className="flex justify-center items-center my-10">
      <form
        className="w-[90%] md:w-[40%] py-9 px-14 event-reg-form"
        onSubmit={handleLogin}
      >
        <h4 className="text-2xl font-extrabold mb-8">
          Welcome, <span className="text-primary font-bold">Back!</span>
        </h4>

        <input type="email" name="email" placeholder="Email" required />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        {error && <p className="text-red-600 font-bold mb-3">Error: {error}</p>}

        <button
          type="submit"
          className="btn btn-primary btn-block rounded-none"
        >
          {isLoading ? (
            <span className="loading loading-infinity loading-lg text-red-300"></span>
          ) : (
            <span>Sign In</span>
          )}
        </button>

        <p className="text-center mt-2">
          Don't have an account?{" "}
          <Link to="/register" className="text-info underline font-bold">
            Create One
          </Link>
        </p>

        <div className="divider">OR</div>

        <div
          className="flex justify-between items-center border-2 mt-7 rounded-full hover:shadow-lg hover:cursor-pointer transition-shadow ease-out duration-300"
          onClick={handleGoogle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>

          <div>Continue With Google</div>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default Login;
