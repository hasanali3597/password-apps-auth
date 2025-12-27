import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/Firebase.init";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = (e) => {
    setSuccess("");
    setError("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsAccepted = e.target.terms.checked;

    console.log("Signup clicked", email, password);
    const lengthPatternRegex = /^.{6,}$/;
    const uppercaseAndLowercaseRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    const specialCharRegex = /[^A-Za-z0-9]/;
    if (!lengthPatternRegex.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    } else if (!uppercaseAndLowercaseRegex.test(password)) {
      setError("Password must contain both uppercase and lowercase letters");
      return;
    } else if (!specialCharRegex.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }
    if (!termsAccepted) {
      setError("You must accept the terms and conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccess("Account created successfully!");
        console.log(userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-4">Create your account using email and password</p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    className="input input-bordered w-full"
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3"
                  >
                    {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
              </div>
              <a href="#" className="link link-hover text-sm">
                Forgot password?
              </a>{" "}
              <br />
              <label class="label top-3]">
                <input type="checkbox" name="terms" class="checkbox" />
                You must accept the terms and conditions
              </label>
              <button className="btn btn-neutral w-full mt-4">Sign Up</button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {success && <p className="text-green-500 mt-4">{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
