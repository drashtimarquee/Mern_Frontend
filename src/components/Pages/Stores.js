import React from 'react'

function Stores() {
    return (
        <div>
            <div className='stores'>
                <h1>Our Stores</h1>
                <p>Located across Delhi NCR, our retail showrooms are treasure troves for unique finds. All our<br />
                    stores our unique - just like your personal style.</p>
                <p>Our stores are filled with home accessories, kitchen and dining ware, accent furniture and gift<br />
                    ideas ready to tempt and inspire the interior decorator within.</p>
            </div>
            <div >
                <div className='store-1'>
                    <img src='Assets/Store/Store.webp' alt='stor' />
                    <div className='store-div'>
                        <h6>OUR LATEST STORE</h6>
                        <h2>Khan Market, Delhi</h2>
                        <p>8C, Khan Market,</p>
                        <p>New Delhi, India</p>
                        <p>Mon - Sun, 10.30AM - 8.30PM</p>
                        <p>Phone: +91-9811338191</p>
                    </div>
                </div>
                <div className='store-1'>
                    <img src='Assets/Store/Store2.jpg' alt='stor' />
                    <div className='store-div'>
                        <h6>WALL ART SPECIAL STORE</h6>
                        <h2>Malviya Nagar</h2>
                        <p>Showroom No. 3 & 4,</p>
                        <p>New Main Market, Malviya Nagar</p>
                        <p>10.30 AM - 9 PM (Tuesday Closed)</p>
                        <p>Phone: 011-41078585</p>
                    </div>
                </div>
            </div>
            <div className='store-text'>
                A FEW SNIPPETS OF OUR STORES
                <div className='store-list'>
                    <img src='Assets/Store/Stlist1.jpg' alt='stor' />
                    <img src='Assets/Store/Stlist2.jpg' alt='stor' />
                    <img src='Assets/Store/Stlist3.jpg' alt='stor' />
                    <img src='Assets/Store/Stlist4.jpg' alt='stor' />
                    <img src='Assets/Store/Stlist5.jpg' alt='stor' />
                    <img src='Assets/Store/Stlist6.jpg' alt='stor' />
                    <img src='Assets/Store/Stlist7.jpg' alt='stor' />
                    <img src='Assets/Store/Stlist8.jpg' alt='stor' />
                </div>
            </div>
        </div>
    )
}

export default Stores;
