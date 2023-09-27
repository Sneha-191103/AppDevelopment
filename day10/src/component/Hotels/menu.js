import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../pages/navbar";
import Footer from "../AdminAccess/footer";
import '../logobg.png'
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Popup from "reactjs-popup";
export default function Menu(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = (foodItem ) => {
        showMessage('success', 'Product added!', '/menu');
        dispatch(addToCart( foodItem));
    };
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [message, setMessage] = useState({
        type: '',
        content: '',
        url: '',
        btn: ''
    });
    const showMessage = (type, content, url = '', btn = 'Got it') => {
        setMessage({ type, content, url, btn });
        setPopupVisible(true);
    };
    const handleGotItClick = () => {
        if (message.url) {
            navigate(message.url);
        }
        setPopupVisible(false);
    };
    const {name}=useParams()
    const hotelname=name;
    const menu=[
        {
            name:'KFC',
            menus:[
                {
                    food1:[
                        {
                            id:1,
                            img:'https://i.pinimg.com/564x/c6/fa/7e/c6fa7e219c8c6d1eaeffd4528923663a.jpg',
                            foodname:'Chicken Burger',
                            price:'99'

                        },
                        {
                            id:2,
                            img:'https://i.pinimg.com/564x/a8/e3/d3/a8e3d3f603750199948a94c03c14dc18.jpg',
                            foodname:'French Fries',
                            price:'75'
                        },
                        {
                            id:3,
                            img:'https://i.pinimg.com/564x/0f/67/e1/0f67e1e0f3c80b6f7c855bef37c9de36.jpg',
                            foodname:'Bucket Combo',
                            price:'350'
                        },
                        {
                            id:4,
                            img:'https://i.pinimg.com/564x/48/0a/f4/480af456d65e3b4f78f9275e73d46701.jpg',
                            foodname:'Periperi Chicken bucket',
                            price:'450'
                        },
                        {
                            id:5,
                            img:'https://i.pinimg.com/564x/10/f1/51/10f1517b24c3fd396315076c86383864.jpg',
                            foodname:'Chicken wings',
                            price:'250'
                        }

                    ]
                }
            ]
        },
        {
            name:'Annapoorna',
            menus:[
                {
                    food1:[
                        {
                            id:6,
                           img:' https://i.pinimg.com/564x/7b/36/0b/7b360b3dbadbbfdfbdeed591bfcdb832.jpg',
                           foodname:'Veg Full Meals',
                           price:'150'


                        },
                        {
                            id:7,
                            img:'https://i.pinimg.com/564x/67/9b/e0/679be0f58392abd2bb7a24faf649e09b.jpg',
                            foodname:'Masal Dosa',
                            price:'60'
                        },
                        {
                            id:8,
                            img:'https://i.pinimg.com/564x/00/0b/42/000b426252d70c30e25bcfe3d802ecb0.jpg',
                            foodname:'Poori Masala',
                            price:'70'
                        },
                        {
                            id:9,
                            img:'https://i.pinimg.com/564x/09/ac/b9/09acb9d92ca4d77a7d2ea3d287f91f82.jpg',
                            foodname:'Plain Roast',
                            price:'55'
                        },
                        {
                        id:10,
                            img:'https://i.pinimg.com/564x/9d/cf/49/9dcf4955cc93a7ae992f84ce298a1dc8.jpg',
                            foodname:'Idly',
                            price:'50'
                        }

                    ]
                }
            ]
        }
        ,{
            name:'Hotel Kokarako',
            menus:[
                {
                    food1:[
                        {
                            id:11,
                            img:'https://i.pinimg.com/564x/c5/d2/62/c5d262f3377da91a7229772026a2ec5c.jpg',
                            foodname:'Chicken Briyani',
                            price:'200'

                        },
                        {
                            id:12,
                            img:'https://i.pinimg.com/564x/0f/d2/ac/0fd2ac5a0653db257ad8278347207bdc.jpg',
                            foodname:'Chilli Chicken ',
                            price:'75'
                        },
                        {
                            id:13,
                            img:'https://i.pinimg.com/564x/f0/92/69/f09269e96b19738d32ae9f4785f32e36.jpg',
                            foodname:'Chicken Grill',
                            price:'100'
                        },
                        {
                            id:14,
                            img:'https://i.pinimg.com/564x/00/ec/36/00ec36135f19b0b61b574d6a88864fc3.jpg',
                            foodname:'Shawarma',
                            price:'90'
                        },
                        {
                            id:15,
                            img:'https://i.pinimg.com/564x/70/56/0d/70560d02f486ca73d55692466db89c8d.jpg',
                            foodname:'Chicken Tandoori',
                            price:'170'
                        }

                    ]
                }
            ]
        },
        {
            name:'Sri Krishna Sweets',
            menus:[
                {
                    food1:[
                        {
                            id:16,
                            img:'https://i.pinimg.com/564x/66/5b/25/665b25ae0acc25ee0cc11bc89e166ed7.jpg',
                            foodname:'Milk Sweets',
                            price:'30'

                        },
                        {
                            id:17,
                            img:'https://i.pinimg.com/564x/05/1b/2d/051b2d292523464dd49a61af64afaa2a.jpg',
                            foodname:'Ghee Sweets',
                            price:'35'
                        },
                        {
                            id:18,
                            img:'https://i.pinimg.com/564x/d9/a4/31/d9a431fb3e87daf91d7c46b11f9ec168.jpg',
                            foodname:'Karupatti Sweets',
                            price:'45'
                        },
                        {
                            id:19,
                            img:'https://i.pinimg.com/564x/81/c0/87/81c0876a7a669147d1a0911cafb451a8.jpg',
                            foodname:'Cashew Sweets',
                            price:'50'
                        },
                        {
                            id:20, 
                            img:'https://i.pinimg.com/564x/c9/5d/6b/c95d6b9aa21f557365732b9293c3c6e1.jpg',
                            foodname:'Assorted Sweets',
                            price:'60'
                        }

                    ]
                }
            ]
        }
    ]
    const filteredRestaurant = menu.find((restaurant) => restaurant.name === hotelname);
    if (!filteredRestaurant) {
        return <p>Restaurant not found</p>; // Display a message when the restaurant is not found
      }
    return(
        <div>
      <NavBar />
      <div style={{ padding: "20px 20px 20px 20px" }}>
       <center> <h1>{filteredRestaurant.name}</h1></center>
       <br></br><br></br>
        {filteredRestaurant.menus.map((menuGroup, index) => (
          <div key={index} className="container">
            {menuGroup.food1.map((foodItem, itemIndex) => (
              <div key={itemIndex} className="card">
                <center>
                  <div className="card-img">
                    <img
                      src={foodItem.img}
                      alt={foodItem.foodname}
                      width="180px"
                      height="200px"
                    />
                  </div>
                  <div className="card-info">
                    <p className="text-title">{foodItem.foodname}</p>
                  </div>
                  <div className="card-footer">
                    <span className="text-title">${foodItem.price}</span>
                    <div
                      className="card-button"
                      onClick={() => handleAdd(foodItem)}
                      >
                        {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
    <svg class="svg-icon" viewBox="0 0 20 20">
      <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    </svg>
    
  </div></div></center></div> 
          ))}
          &emsp;
        <br></br><br></br></div>
      ))}
      </div>
      <Footer/>
        </div>
    )
}