import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_small.jpg"
          alt="background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50"></div>
      </div>
      <form className="absolute bg-black/75 w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-md">
        <h1 className="text-3xl font-bold mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 bg-[#333] rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white-600"
          />
        )}

        <input
          type="text"
          placeholder="Email or phone number"
          className="w-full p-3 mb-4 bg-[#333] rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-[#333] rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white-600"
        />

        <button className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 font-semibold py-3 rounded mt-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="mt-8 text-gray-400 text-sm">
          {isSignInForm ? "New to Netflix?" : "Already registered?"}{" "}
          <a
            href="#"
            className="text-white hover:underline"
            onClick={toggleSignUpForm}
          >
            {isSignInForm ? "Sign Up now" : "Sign In now"}
          </a>
          .
        </div>
      </form>
    </div>
  );
};

export default Login;
