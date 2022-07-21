import React from 'react'

function Header() {
    let hamburgerMenu = document.querySelectorAll(".hamburger-menu");
    const mobileMenu = () => {
        if (hamburgerMenu.contains === "none") {
            hamburgerMenu.classList.add = "block";
        } else {
            hamburgerMenu.classList.add = "none";
        }
    }
    return (
        <div className="container">
            <header>
                <ul>
                    <li><a href="/#" >Home</a></li>
                    <li><a href="/#" >About</a></li>
                    <li><a href="/#" >Timeline</a></li>
                    <li className="brand"><a href="/#" ><span>Medic Care</span> <span className="slogan">Healt Specialist</span></a></li>
                    <li><a href="/#" >Tesitimonials</a></li>
                    <li><a href="/#" >Booking</a></li>
                    <li><a href="/#" >Contact</a></li>
                </ul>
                <div className="mobile-nav">
                    <div className="brand">
                        <a href="/#" ><span>Medic Care</span> <span className="slogan">Healt Specialist</span></a>
                    </div>
                    <div className="hamburger-menu" onClick={mobileMenu}>
                        <span>1</span>
                        <ul>
                            <li><a href="/#" >Home</a></li>
                            <li><a href="/#" >About</a></li>
                            <li><a href="/#" >Timeline</a></li>
                            <li><a href="/#" >Tesitimonials</a></li>
                            <li><a href="/#" >Booking</a></li>
                            <li><a href="/#" >Contact</a></li>
                        </ul>
                    </div>
                </div>
            </header>          
        </div>
    )
}

export default Header