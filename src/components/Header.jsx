/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO_URL, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../store/gptSearchSlice";

const Header = () => {
  const gptSearchView = useSelector((store) => store.gptSearch.showGptSearch);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch(() => navigate("/error"));
  };

  const handleClickGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-wrap items-center justify-between px-4 md:px-12 py-4 bg-gradient-to-b from-black/80 to-transparent">
      {/* Netflix Logo */}
      <div className="flex items-center flex-shrink-0">
        <img
          className="w-28 md:w-44 object-contain cursor-pointer"
          src={LOGO_URL}
          alt="Netflix Logo"
        />
      </div>

      {/* User Section */}
      {user && (
        <div className="flex flex-wrap items-center space-x-2 md:space-x-4 mt-2 md:mt-0">
          <button
            className="text-white bg-purple-800 rounded-lg px-3 py-2 hover:scale-115 transition-transform duration-200 whitespace-nowrap"
            onClick={handleClickGptSearch}
          >
            {gptSearchView ? "Browse" : "GPT-Search"}
          </button>
          <img
            src={USER_AVATAR}
            alt="user avatar"
            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:scale-115 transition-transform duration-200"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-semibold px-3 py-1 rounded hover:bg-white/20 hover:scale-115 transition-transform duration-200"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
