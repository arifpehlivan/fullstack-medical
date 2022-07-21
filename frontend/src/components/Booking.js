import React from 'react'
import { FaCalendar } from 'react-icons/fa';

function Booking() {
    return (
        <div className='booking'>
            
            <div className="form">
                <h2>Book an appointment</h2>
                <div>
                    <input type="text" placeholder='Full name'/>
                <input type="text" placeholder='Email adress'/>
                </div>
                

                <div>
                    <input type="text" placeholder='Phone: 1234567890'/>
                <input type="text" placeholder='gg.aa.yyy'/>
                <FaCalendar size="18px"/>
                </div>
                
                <textarea placeholder='Additional message'/>
                <div>
                    <button>Book Now</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Booking