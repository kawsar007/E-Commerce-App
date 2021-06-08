import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
          <div className="footerHead">
              {/* <img src="./images/logo4.png" alt=""/> */}
              <span>OnlineShop</span>
          </div>
          <div className="menuItem">
              <ul>
                  <li>Home</li>
                  <li>Adversite</li>
                  <li>Supports</li>
                  <li>Marketing</li>
                  <li>Contact</li>
              </ul>
          </div>
          <div className="copyright">
             <p> Copyright by 2021 Online Shop</p>
          </div>
        </div> 
    )
}

export default Footer
