import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {

    const isLoggedIn = useSelector( (state) => state.isLoggedIn.value);

    return (
      <div>
        Navbar
        <nav>
          <ul style={{ backgroundColor: "yellow", listStyle: "none" }}>
            
            <li style={{ padding: "6px", display: "inline" }}>
              <NavLink to={`/`}>Home</NavLink>
            </li>


            {isLoggedIn && (
              <li style={{ padding: "6px", display: "inline" }}>
                <NavLink to={`/logout`}>Logout</NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <NavLink to={`/orders`}> My Orders </NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li style={{ padding: "6px", display: "inline" }}>
                <NavLink to={`/cart`}> My Cart</NavLink>
              </li>
            )}

            {!isLoggedIn && (
              <li style={{ padding: "6px", display: "inline" }}>
                <NavLink to={`/about`}>About</NavLink>
              </li>
            )}

            {!isLoggedIn && (
              <li style={{ padding: "6px", display: "inline" }}>
                <NavLink to={`/login`}>Login</NavLink>
              </li>
            )}

            {!isLoggedIn && (
              <li style={{ padding: "6px", display: "inline" }}>
                <NavLink to={`/signup`}>Signup</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    );
}

export default Navbar