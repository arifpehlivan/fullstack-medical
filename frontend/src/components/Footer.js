import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
            <div className='footer'>
                <div className="hour">
                    <h2>Opening Hours</h2>
                    <ul>
                        <li>Monday, Tuesday - Firday <span>8:00 AM - 5:00 PM</span></li>
                        <hr />
                        <li>Saturday - Sunday : Closed</li>
                    </ul>
                </div>
                <div className="adress">
                    <h2>Our Clinic</h2>
                    <p><a href="mailto:test@company.com">test@company.com</a></p>
                    <p>İstanbul Turkey</p>
                </div>
                <div className="socials">
                    <h2>Socials</h2>
                    
                    <ul>
                        <li><FaFacebook size="18px"/></li>
                        <li><FaTwitter size="18px"/></li>
                        <li><FaInstagram size="18px"/></li>
                        <li><FaYoutube size="18px"/></li>
                    </ul>
                    <p>Copyright © Medical 2022</p>
                    <br />
                    <br />
                    Design: 
                </div>
            </div>
    )
}

export default Footer