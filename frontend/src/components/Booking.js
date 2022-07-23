import React, { useState } from 'react'
import { FaCalendar } from 'react-icons/fa';
import axios from "axios";

function Booking() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [date,setDate] = useState("");
    const [message,setMessage] = useState("");

    const urlAxios = 'http://localhost:5000/';
    const bookingHandle =  (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            date,
            message
        }

        
        // console.log(data);
        try {
            axios.post(urlAxios, data).then((req,res) => {
            // console.log(req);
            
        })
        } catch (err) {
            console.log(err);
        }
        
        
    }
    return (
        <div className='booking'>
            
            <div className="form">
                <h2>Book an appointment</h2>
                <div>
                    <input type="text" placeholder='Full name' onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder='Email adress' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                

                <div>
                    <input type="text" placeholder='Phone: 1234567890' onChange={(e) => setPhone(e.target.value)}/>
                <input type="text" placeholder='gg.aa.yyy' onChange={(e) => setDate(e.target.value)}/>
                <FaCalendar size="18px"/>
                </div>
                
                <textarea placeholder='Additional message' onChange={(e) => setMessage(e.target.value)}/>
                <div>
                    <button onClick={bookingHandle}>Book Now</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Booking