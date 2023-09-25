import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import animationData from '../lottie/empty.json'
import { useNavigate } from 'react-router-dom';

import NavBar from '../pages/navbar';
import Footer from '../AdminAccess/footer';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';
import { FaMinusCircle, FaPlusCircle, FaTrash } from 'react-icons/fa';
import Lottie from 'react-lottie';




const Cart = () => {
  const cartItems = useSelector(state => state.cart.foodItem);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId, itemName) => {

    dispatch(removeFromCart(itemId));
    
  
  };


  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };


  const totalAmount = cartItems.reduce((acc,foodItem) => {
    return acc + foodItem.price * foodItem.quantity;
  }, 0);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
      <NavBar/>
      {cartItems.length === 0 ? (
         <Lottie
         options={defaultOptions}
           height={500}
           width={550}
           />
      ) : (
        <div>
          <div className='cart-title-container'>
            <h1 className='cart-title primary'>CART</h1>
            
          </div>
          <div className='shadow bg-white cart-table-container'>
            <table className='cart-data-table'>
              <thead className='cart-data-thead shadow'>
                <tr>
                  <th>
                    FoodItem
                  </th>
                  <th>
                    FoodItem Name
                  </th>
                  <th>
                    Price
                  </th>
                  <th>
                    Order Quantity
                  </th>
                  <th>
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((foodItem) => (
                  <tr key={foodItem.id}>
                    <td> <img src={foodItem.img}width='100px' height='100px' className='mini-product-img' /></td>
                    <td>{foodItem.foodname}</td>
                    <td>₹ {foodItem.price}</td>
                    <td>
                      <span className='d-flex-r'>
                        <button className='data-btn-mini bg-white shadow' onClick={() => handleDecreaseQuantity(foodItem.id)}> <FaMinusCircle /> </button>
                        <h3> {foodItem.quantity}</h3>
                        <button className='data-btn-mini bg-white shadow' onClick={() => handleIncreaseQuantity(foodItem.id)}> <FaPlusCircle /> </button>
                      </span>
                    </td>
                    <td>
                      <button className='data-btn-mini bg-white shadow' onClick={() => handleRemoveItem(foodItem.id, foodItem.name)}><FaTrash color="#ff0000" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='total'>
          <p className='cart-total'><center>Total: ₹{totalAmount}</center></p>
          </div>
        </div>
      )}


      <Footer />
    </div>
  );
};

export { Cart };