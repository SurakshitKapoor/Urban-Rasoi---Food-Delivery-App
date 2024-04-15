import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cart';
import { useEffect, useState } from 'react';

function CartItem({item, cartTotal, setCartTotal}) {

    let dispatch = useDispatch();

    function removeFromCart(item) {

        setCartTotal(cartTotal-item.price);
        
        dispatch(remove(item)); 

    }

    return(
        <div>
            CartItem
            <div>
                <img src={`${item.img}`} />
                <p> {item.name} </p>
                <p> {item.size} </p>
                <p> {item.qty} </p>
                
                <h4> Price : {item.price} </h4>

                <div>
                    <button onClick={() => removeFromCart(item)}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;