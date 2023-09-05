import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const { signUp } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
      .then((res) => {
        console.log(res.user);

        alert("Signed Up Successfully!");
        form.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="block md:flex justify-between items-center container">
        <div className="md:w-[50%]">
          <p className="text-[var(--secondary-color)] subtitle text-3xl font-semibold">
            Medical & General Care
          </p>
          <h1 className="text-6xl text-[var(--primary-color)] mt-4 mb-6 font-bold">
            Sign Up
          </h1>
          <p className="text-gray-400 mb-10">
            Proactively revolutionize granular customer service after pandemic
            internal or organic sources istinctively impact proactive human
          </p>

          <Link to="/login">
            <button className="btn btn-info font-bold btn-wide mb-1 rounded-lg">
              Sign In &gt;
            </button>
          </Link>
          <p className="font-semibold text-gray-400 ps-2">
            Already Have an Account?
          </p>
        </div>

        <div className="md:w-[50%] border border-3 border-blue-300">
          {/* right header */}
          <div className="bg-[#27467c] flex justify-between items-center text-white p-10">
            <div>
              <h4 className="text-3xl font-bold">Let's Get Started!</h4>
              <p className="text-gray-200 mt-2 text-sm">
                Sign up to get yourself the best doctors in the town.
              </p>
            </div>
            <div className="bg-[#18cfed] p-4 rounded-full hover:bg-black cursor-pointer transition-all ease duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
          </div>

          {/* right side form */}
          <form className="login-form form pt-10" onSubmit={handleRegister}>
            <label className="mb-1 ps-3 font-semibold text-gray-400">
              Email
            </label>
            <input type="email" name="email" placeholder="Enter your email" />

            <br />

            <label className="mb-1 ps-3 font-semibold text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <br />
            <button
              className="btn btn-block btn-info font-bold rounded-none"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
