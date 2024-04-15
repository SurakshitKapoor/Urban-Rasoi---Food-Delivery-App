import { useSelector } from 'react-redux';

import {NavLink} from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useEffect, useState } from 'react';

function Cart() {

    const [cartTotal, setCartTotal] = useState(0);

    function getTotal() {
        let t = cart.reduce((acc, curr) => acc + curr.price, 0);
        console.log("total is : ", t);

        setCartTotal(t);

    }

    useEffect(() => {
        getTotal();
    }, []);

    let cart = useSelector((state) => state.cart.items);
    console.log("Cart is : ", cart);


    return(
        <div>
            Cart
            {
                cart.length !== 0
                ?
                (<div>

                    <div>
                        {
                            cart.map((item) => (
                                <div key={item._id}>
                                    <CartItem  item={item} key={item._id} cartTotal={cartTotal} setCartTotal={setCartTotal} />
                                </div>
                            ))
                        }

                    </div>

                    <div>
                        <h3>
                            Your Cart:
                        </h3>
                        <h5>
                            Summary:
                        </h5>
                        <div>
                            <p> Total Items : {cart.length} </p>
                            <p> Total Amount : {cartTotal} </p>
                        </div>
                        
                    </div>

                </div>)
                :
                (<div>
                    <h4>
                        Oops! Your cart is Empty
                    </h4>
                    <NavLink to={`/`}>
                        <p> Shop Now! </p>
                    </NavLink>
                </div>)
            }
        </div>
    )
}

export default Cart;