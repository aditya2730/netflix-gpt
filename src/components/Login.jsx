/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { BG_IMG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(errorMessage);
    if (message) return;

    if (!isSignInForm) {
      // SignUp LOGIC -----------------------
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      // Sign-In Logic --------------------------
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen w-screen" src={BG_IMG_URL} alt="background" />
        <div className="absolute inset-0"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute bg-black/75 w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-md"
      >
        <h1 className="text-3xl font-bold mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 bg-[#333] rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white-600"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="w-full p-3 mb-4 bg-[#333] rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white-600"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-[#333] rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white-600"
        />

        <p className="text-red-500">{errorMessage}</p>

        <button
          className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 font-semibold py-3 rounded mt-2"
          onClick={handleSubmit}
        >
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
