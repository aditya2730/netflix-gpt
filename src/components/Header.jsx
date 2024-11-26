import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo } from '../utils/constants'
import { removeUser } from "../utils/userSlice";
import { useSelector, useDispatch } from 'react-redux';

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const userData = useSelector((state) => state.user)

    const handleSignout = () => {
        dispatch(removeUser())
        navigate("/")
    }

    useEffect(() => {
        try {
            if (userData) {
                navigate('/browse');
            } else {
                navigate('/')
            }
        } catch (error) {
            console.error('Failed to initialize user:', error);
        }

    }, [navigate, userData]);

    return (
        <div className="absolute top-0 left-0 bg-transparent items-center w-full px-8 py-2 z-10">
            <img className="w-36 md:w-44" src={logo} alt="logo" />
            {userData ? <button
                onClick={handleSignout}
                className="absolute top-0 right-0 text-white px-4 py-2 z-10"
            >
                Sign Out
            </button> : <div></div>}
        </div>
    );
}

export default Header;




