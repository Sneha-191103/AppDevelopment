import React, { useState } from "react";
import NavBar from "../pages/navbar";
import Footer from "../AdminAccess/footer";
import '../css/hotel.css'
import '../logobg.png'
import { FaSearch } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
export default function Hotels(){
    const hotels=[
        {
            name:'KFC',
            location:'KFC, SN T10, No 67/71, Brookefields Estates, Dr Krishnasamy Mudaliyar Rd, Puthiyavan Nagar, Sukrawar Pettai, R.S. Puram, Coimbatore, Tamil Nadu 641001',
            image:'https://i.pinimg.com/564x/bd/7b/44/bd7b4479e2aa587eeea39d93dfb49a13.jpg',
            rating:'4'
        },
        {
            name:'Annapoorna',
            location:'75, E Arokiasamy Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002',
            image:'https://i.pinimg.com/564x/7b/36/0b/7b360b3dbadbbfdfbdeed591bfcdb832.jpg',
            rating:'3'
        },
        {
            name:'Hotel Kokarako',
            location:'Hotel kokarakko, Avinashi Rd, opp. decathlon, Cexus Nagar, Neelambur, Tamil Nadu 641062',
            image:'https://i.pinimg.com/564x/84/0e/a3/840ea3c543522958fa5d59a9b37e7ce2.jpg',
            rating:'4'
        },
        {
            name:'Hydrebad Briyani',
            location:'Hyderabad Biryani, 2X87+2QG, Gokhale St, Peranaidu Layout, Ram Nagar, Gandhipuram, Coimbatore, Tamil Nadu 641009',
            image:'https://i.pinimg.com/564x/b8/3b/a9/b83ba9935bd964fd25b7043a6ff5b598.jpg',
            rating:'4'
        },
        {
            name:'Sri Krishna Sweets',
            location:'Sri Krishna Sweets, Avinashi Road, Peelamedu, Hope College, Coimbatore, Tamil Nadu',
            image:'https://i.pinimg.com/564x/7d/df/d0/7ddfd0f25a1c58c279e110e5404b2b73.jpg',
            rating:'4'
        }
    ]

    
  const [hotel, setHotels] = useState(hotels);
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const handleSearch = (searchQuery) => {
    const filtered = hotel.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredHotels(filtered);
  };
    return(
        <div>
        <NavBar />
        <div style={{ padding: "50px 50px 50px 50px" }} className="hotels">
          <SearchBar onSearch={handleSearch} />
          <br></br>
          {filteredHotels.length === 0 ? (
            <h1><center>No hotels found</center></h1>
          ) : (
            
            filteredHotels.map((hotel) => (
                <Link to={`/menu/${hotel.name}`}><div className="hotel" key={hotel.name}>
                <div className="hot">
                  <div className="hotimg">
                    <img src={hotel.image} width="300px" height="200px" alt={hotel.name} />
                  </div>
                  <div>
                    <h1>{hotel.name}</h1>
                  </div>
                  <div className="desc">
                    <div>{hotel.location}</div>
                  </div>
                </div>
                <br />
              </div></Link>
            ))
          )}
        </div>
        <Footer />
      </div>
    )
}
const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearchClick = () => {
      if (onSearch) {
        onSearch(searchQuery);
      }
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by hotel name..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <GrSearch onClick={handleSearchClick} style={{fontSize:'30px'}} className="icon"/>
      </div>
    );
  };