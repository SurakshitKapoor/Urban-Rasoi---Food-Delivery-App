import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { changeLoggedIn } from "../redux/Slices/isLoggedIn";

function Login() {

    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.isLoggedIn.value);
    const dispatch = useDispatch();

    const[formData, setFormData] = useState({
        email:'',
        password:''
    });

    function setLocalStorage(token) {
      localStorage.setItem('jwtToken', token);
      console.log("token is set at localstorage");
    }

    function changeHandler(e) {
        setFormData( prev => ({
            ...prev,
            [e.target.name]:e.target.value,
        })
        )   
    }

    async function submitHandler(e) {
        e.preventDefault();

        console.log('formData is : ', formData);
        console.log('login finished');

        try{
            const response = await fetch('http://localhost:4000/api/v1/login', {
                method:"POST",
                // mode: 'no-cores',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formData),                
            })

            if(response.ok) {
                const result = await response.json();
                console.log("result of signup : ", result);

                setLocalStorage(result.jwtToken);

                alert(`You have loggedIn successfully`);

                setFormData({email:"", password:''});

                dispatch(changeLoggedIn());

                navigate('/');

            }
        }
        catch(error) {
            console.log('Client error while logging in : ', error.message);
        }
    }
    return (
      <div>
        Login
        <form onSubmit={(e) => submitHandler(e)}>
            
          <label htmlFor="email">Enter Your Email Id</label>
          <input
            type="email"
            placeholder="your email id"
            name="email"
            id="email"
            onChange={(e) => changeHandler(e)}
            value={formData.email}
          />

          <label htmlFor="password">Enter Your Password</label>
          <input
            type="password"
            placeholder="your password"
            name="password"
            id="password"
            onChange={(e) => changeHandler(e)}
            value={formData.password}
          />

          <button type="submit">
            Login
          </button>

          <NavLink to={`/signup`}>
            <p> Create New User </p>
          </NavLink>
        </form>
      </div>
    );
}

export default Login;