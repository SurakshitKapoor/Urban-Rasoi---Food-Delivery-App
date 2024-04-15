
import {useSelector, useDispatch} from 'react-redux';
import { changeLoggedIn } from '../redux/Slices/isLoggedIn';
import { reset } from '../redux/Slices/cart';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    function getLogOut() {

        alert("Logging Out ...");

        setTimeout(function(){

            localStorage.removeItem('jwtToken');

            dispatch(reset());

            dispatch(changeLoggedIn());

            navigate('/');

        }, 2000)
    }

    useEffect(() => {
        getLogOut();
    }, [])

    return(
        <div>
            Logout

        </div>
    )
}

export default Logout;