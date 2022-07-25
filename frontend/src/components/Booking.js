import React, { useEffect, useState } from 'react'
import { FaCalendar } from 'react-icons/fa';
import axios from "axios";

function Booking() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [date,setDate] = useState("");
    const [hours,setHours] = useState("");
    const [message,setMessage] = useState("");

    useEffect (() => {


    },[date])

    const today = (function() {
        const now = new Date();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hour = now.getHours().toString().padStart(2, '0');
        const minute = now.getMinutes().toString().padStart(2, '0');
        return `${now.getFullYear()}-${month}-${day}--${hour}-${minute}`;
    })();
    
    // console.log(today[9]);
    

    const urlAxios = 'http://localhost:5000/';
    const bookingHandle =  (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            date,
            hours,
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
                    <input type="date" min={new Date()} placeholder='gg.aa.yyy' onChange={(e) => setDate(e.target.value)}/>
                    <select name="hour" id="hour" onChange={(e) => setHours(e.target.value)}>
                        <option disabled>08:00</option>
                        <option>08:00</option>
                        <option>09:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                        <option>13:00</option>
                        <option>14:00</option>
                        <option>15:00</option>
                        <option>16:00</option>
                        <option>17:00</option>
                        
                    </select>
                    {/* <FaCalendar size="18px"/> */}
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