import React, { useState } from "react";
import NavBar from "../pages/navbar";
import { FaShoppingBag, FaShoppingCart, FaUserTie, FaUsers } from 'react-icons/fa'
import '../css/dashboard.css'
import { Bar } from "react-chartjs-2";
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Dashboard()
{
    

      
    const options = {
        animationEnabled: true,
        theme:'light2',
        title:{
            text: "Weekly Orders Chart"
        },
        axisX: {
            title: "Week",
            reversed: true,
        },
        axisY: {
            title: "Number of orders",
            includeZero: true,
            
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y:  2200000, label: "Sunday" },
                { y:  1800000, label: "Monday" },
                { y:  8000000, label: "Tuesday" },
                { y:  563000, label: "Wednesday" },
                { y:  3300000, label: "Thursday" },
                { y:  376000, label: "Friday" },
                { y:  8360000, label: "Saturday" }
            ]
        }]
    }
    // const options = {
    //     title: {
    //         text: "Weekly Order Chart"
    //     },
    //     data: [
    //     {
    //         // Change type to "doughnut", "line", "splineArea", etc.
    //        type:'column',
    //        indexLabelFontColor: "#5A5757",
	// 			indexLabelPlacement: "outside", 
               
    //         dataPoints: [
    //             { label: "Sunday",  y: 150000  },
    //             { label: "Monday", y: 390000  },
    //             { label: "Tuesday", y: 450000  },
    //             { label: "Wednesday",  y: 300000  },
    //             { label: "Thursday",  y: 500000  },
    //             { label: "Friday",  y: 18000  },
    //             { label: "Saturday",  y: 480000  }
    //         ]
           
    //     }
    //     ]
    // }


      
    const [data,setData]=useState({
        userCount:20000000,
        merchant:13000,
        driver:40000,
        orders:500000
    })
    
    return(
        <>
     <div className="dash">
        <div className="box">
            <div className="head">
                <h4>Total Users</h4>
            </div>
            <div className="ico">
                <FaUsers style={{color:'blue',fontSize:'35px'}}/> {data.userCount}
            </div>
        </div>
       
        <div className="box">
            <div className="head">
               <h4> Total Merchants</h4>
            </div>
            <div className="ico">
                <FaUserTie style={{color:'purple',fontSize:'35px'}} /> {data.merchant}
            </div>
        </div>
        <div className="box">
            <div className="head">
               <h4> Total Delivery Partners</h4>
            </div>
            <div className="ico">
                <FaShoppingBag style={{color:'orange',fontSize:'35px'}}/> {data.driver}
            </div>
        </div>
        <div className="box">
            <div className="head">
                <h4>Total Orders</h4>
            </div>
            <div className="ico">
                <FaShoppingCart style={{color:'red',fontSize:'35px'}}/> {data.orders}
            </div>
        </div>
     </div>
     <br></br><br></br>
    
     <div className="bar"style={{ maxWidth: "1600px" }} >
     <CanvasJSChart options = {options} />
     </div>
       </>
        
    )
}