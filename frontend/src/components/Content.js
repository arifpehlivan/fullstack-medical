import React from 'react'
import { FaBookOpen } from 'react-icons/fa';

function Content() {
    return (
        <main>
            <div className='content'>

                <div className='content-text'>
                    <h1>Meet Dr. Carson</h1>
                    Protect yourself and others by wearing masks and washing hands frequently. Outdoor is safer than indoor for gatherings or holding events. People who get sick with Coronavirus disease (COVID-19) will experience mild to moderate symptoms and recover without special treatments.
                    You can feel free to use this CSS template for your medical profession or health care related websites. You can support us a little via PayPal if this template is good and useful for your work.
                </div>
                <div className="content-img">
                    <div>
                        <h1>12 </h1>
                        Years
                        <div>
                            of Experiences
                        </div>
                    </div>
                </div>
            </div>

            <div className="image">
                <img src="/img/4.jpg" alt="" />
                <img src="/img/5.jpg" alt="" />
            </div>
            
            <div className="timeline">
                <h1>Our Timeline</h1>
                    <div className="card-container">
                        <div className="card">
                            <div className="card-text ">
                                <h2>Get the vaccine</h2>
                                Donec facilisis urna dui, a dignissim mauris pretium a. Quisque quis libero fermentum, tempus felis eu, consequat nibh.
                            </div>
                        </div>

                        <div>
                            {/* className='content-icon' */}
                            <FaBookOpen size="50px"/>
                        </div>

                        <div>
                            <time>2021-07-31 Saturday</time>
                        </div>
                            
                        
                    </div>
                

                {/* <div className='content-icon'>
                    <div>
                        <FaBookOpen size="50px"/>
                    </div>
                    <div>
                        <FaBookOpen size="50px"/>
                    </div>
                    <div>
                        <FaBookOpen size="50px"/>
                    </div>
                    <div>
                        <FaBookOpen size="50px"/>
                    </div> 
                </div> */}

                <div className="card-container">
                    <div className="card">  
                        <div className="card-text">
                            <h2>Consulting your health</h2>
                            You are fully permitted to use this template for your commercial or personal website. You are not permitted to redistribute the template ZIP file for a download purpose on any other Free CSS collection website.
                        </div>
                    </div>

                    <div>
                        <FaBookOpen size="50px"/>
                    </div>

                    <div>
                        <time>2021-07-31 Saturday</time>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                        <div className="card-text">
                            <h2>Certified Nurses</h2>
                            Phasellus eleifend, urna interdum congue viverra, arcu neque ultrices ligula, id pulvinar nisi nibh et lacus. Vivamus gravida, ipsum non euismod tincidunt, sapien elit fermentum mi, quis iaculis enim ligula at arcu.
                        </div>
                    </div>
                    <div>
                            <FaBookOpen size="50px"/>
                        </div>

                        <div>
                            <time>2021-07-31 Saturday</time>
                        </div>
                </div>

                <div className="card-container">
                    <div className="card">
                        <div className="card-text">
                            <h2>Covid-19 Hospitals</h2>
                            Fusce vestibulum euismod nulla sed ultrices. Praesent rutrum nulla vel sapien euismod, quis tempus dui placerat.
                            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla
                        </div>
                    </div>
                    <div>
                            <FaBookOpen size="50px"/>
                        </div>

                        <div>
                            <time>2021-07-31 Saturday</time>
                        </div>

                </div>

                <div className="card-container">
                    <div className="card">
                        <div className="card-text">
                            <h2>Freelance Nursing</h2>
                            If you need a working contact form that submits email to your inbox, please visit our contact page for more information.
                        </div>
                    </div>
                        <div> 
                            <FaBookOpen size="50px"/>
                        </div>

                        <div>
                            <time>2021-07-31 Saturday</time>
                        </div>
                </div>
                
            </div>
        </main>
    )
}

export default Content