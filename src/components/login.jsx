import Header from "./Header";
import { background_image } from "../utils/constants";
import { useState, useRef } from "react";
import checkValidData from "../utils/validate";
import axios from "axios";
import { initializeAuthListener } from "../utils/authListener";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {

    const dispatch = useDispatch()
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const emailId = useRef(null);
    const password = useRef(null);
    const firstName = useRef(null);
    const lastName = useRef(null);

    const handleSubmitButton = async () => {
        const errorMsg = checkValidData(emailId.current.value, password.current.value);
        setErrorMessage(errorMsg);
        if (errorMsg) return;

        if (!isSignInForm) {
            try {
                const formData = {
                    firstName: firstName.current.value,
                    lastName: lastName.current.value,
                    emailId: emailId.current.value,
                    password: password.current.value,
                };

                if (checkValidData(formData.emailId, formData.password)) {
                    throw new Error(checkValidData(formData.emailId, formData.password));
                }

                await axios.post("http://localhost:3001/signup", formData, {
                    headers: { "Content-Type": "application/json" },
                });

                setIsSignInForm(true);
            } catch (error) {
                console.error("Sign-up error:", error.response ? error.response.data : error.message);
            }
        } else {
            try {
                const formData = {
                    emailId: emailId.current.value,
                    password: password.current.value,
                };

                if (checkValidData(formData.emailId, formData.password)) {
                    throw new Error(checkValidData(formData.emailId, formData.password));
                }

                await axios.post("http://localhost:3001/login", formData, {
                    withCredentials: true,
                });

                const user = await initializeAuthListener()
                dispatch(addUser(user.data))

            } catch (error) {
                console.error("Sign-in error:", error.response ? error.response.data : error.message);
            }
        }
    };

    return (
        <div>
            <Header />
            <div>
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={background_image}
                    alt="Background"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitButton(); // Call the handler on form submission
                }}
                className="p-8 bg-black bg-opacity-75 rounded-lg absolute w-full max-w-md mt-36 mx-auto right-0 left-0 text-white"
            >
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                <div className="space-y-4">
                    {!isSignInForm && (
                        <input
                            ref={firstName}
                            type="text"
                            placeholder="First Name"
                            className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    )}
                    {!isSignInForm && (
                        <input
                            ref={lastName}
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    )}
                    <input
                        ref={emailId}
                        type="text"
                        placeholder="Email or phone number"
                        className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 p-3 mt-6 rounded-lg font-semibold"
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                {errorMessage && <p className="text-bold text-l text-red-500 p-2 mt-2">{errorMessage}</p>}
                <p
                    className="mt-3 text-sm text-gray-400 cursor-pointer"
                    onClick={toggleSignInForm}
                >
                    {isSignInForm
                        ? "New to Netflix? Sign up now."
                        : "Already an existing user? Sign In now."}
                </p>
            </form>
        </div>
    );
};

export default Login;
