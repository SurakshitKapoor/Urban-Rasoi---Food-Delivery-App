import { useState } from "react";
import { NavLink , useNavigate} from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        location:''
    });

    function changeHandler(e) {
        setFormData(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        })  )
    }

    async function submitHandler(e) {
        e.preventDefault();

        console.log('formData is : ', formData);
        console.log('signUp is finished!');

        try{
          const response = await fetch(`http://localhost:4000/api/v1/signup`, {
            method:"POST",
            headers:{
              'Content-Type':'application/json',
            },
            body: JSON.stringify(formData)
          });

          if(response.ok) {
            const result = await response.json();
            console.log("result of signup is : ", result);

            setFormData({email:'', username:'', password:"", location:""});

            navigate('/login');
          }
        }
        catch(error) {
          console.log("Error on client is : ", error.message);
        }


    }


    return (
      <div>
        Signup
        <form onSubmit={(e) => submitHandler(e)}>
          <label htmlFor="username"> Enter your name: </label>
          <input
            type="text"
            placeholder="username"
            name="username"
            id="username"
            onChange={(e) => changeHandler(e)}
            value={formData.username}
          />

          <label htmlFor="email"> Enter Yout Email Id: </label>
          <input
            type="email"
            placeholder="email Id"
            name="email"
            id="email"
            onChange={(e) => changeHandler(e)}
            value={formData.email}
          />

          <label htmlFor="password"> Create a strong Password:</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
            onChange={(e) => changeHandler(e)}
            value={formData.password}
          />

          <label htmlFor="location"> select your location: </label>
          <select
            name="location"
            id="location"
            onChange={(e) => changeHandler(e)}
          >
            <option value="Delhi">Delhi</option>
            <option value={`Mumbai`}> Mumbai </option>
            <option value={`Chandigarh`}> Chandigarh </option>
            <option value={`Bengaluru`}> Bengaluru </option>
            <option value="Surat"> Surat </option>
          </select>

          <button type="submit">Signup</button>

          <NavLink to={`/login`}>
            <p> Already a registered user? </p>
          </NavLink>
        </form>
      </div>
    );
}

export default Signup;