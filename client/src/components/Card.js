import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/Slices/cart';
import { useState } from 'react';

function Card(props) {

    const [formData, setFormData] = useState({
        qty:'1',
        size:''
    });

    function changeHandler(e) {
        setFormData(prev => ({
            ...prev,
            [e.target.name]:e.target.value,
        }))
    }

    let arr = Object.keys(props.filterItem.options[0]);
    // console.log('arr : ', arr);
    let l = arr.length;
    // console.log('len : ', l);

    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    //add to cart
    function addToCart(i) {

        if(isLoggedIn) {

            let item = {
                ...i,
                // ...formData,
                qty:formData.qty,
                size:formData.size,

                //adding total as a key:value pair, reduces one step to calc. total for each item -> now only grandTotal requires
                // total: formData.qty * i.options[0][formData.size]
                price: formData.qty * i.options[0][formData.size]
            }
            console.log("item is : ", item);
            
            //matching an string var with a object key:
            // console.log('total : ', item.qty * item.options[0][formData.size]);
    
            dispatch(add(item));
            console.log("after add: ",cart);
        } 
        else{
            alert("Please Login to add your items");
        }
    }

    //remove from cart
    function removeFromCart(item) {
        // console.log(JSON.stringify(id));
        // let strId = JSON.stringify(id);
        dispatch(remove(item));
        console.log("after remove: ",cart);
    }

    let isLoggedIn = useSelector((state) => state.isLoggedIn.value);

    return(
        <div>
            Card

            <div>
                <img  src={`${props.filterItem.img}`} alt="food_image" />
            </div>
            <h4>
                {props.filterItem.name}
            </h4>
            <p>
                {props.filterItem.description}
            </p>
            
            <form>
            
            <select name='qty' id='qty' onChange={(e)=> changeHandler(e)}>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
                <option value="6"> 6 </option>
            </select>

            {
                l === 2
                ?
                // (console.log("Two"))
                (
                    <div>
                        <select name='size' id='size' value={formData.size} onChange={(e) => changeHandler(e)}>
                            <option disabled></option>
                            <option value="half"> Half </option>
                            <option value="full"> Full </option>
                        </select>
                    </div>
                )
                :
                // (console.log("Three"))
                (
                    <div>
                        <select name='size' id='size' value={formData.size} onChange={(e) => changeHandler(e)}>
                            <option disabled></option>
                            <option value={"regular"}> Regular </option>
                            <option value={"medium"}> Medium </option>
                            <option value={"large"}> Large </option>
                        </select>
                    </div>
                )
            }

            </form>

            {/* <span> Total </span> */}

            {/* <h5> Price: {item.price} </h5> */}

            {
                cart.some((item) => item._id === props.filterItem._id)
                ?
                (<div>
                    <button onClick={() => removeFromCart(props.filterItem)}>
                        Remove from Cart
                    </button>
                </div>)
                :
                (<div>
                    <button onClick={() => addToCart(props.filterItem)}>
                        Add to Cart
                    </button>
                </div>)
            }
            
        </div>
    )
}

export default Card;