import './style.css'
import Bread from '../../images/bread.ico'

function Footer ()
{
    return (
        <>
            <div className='footer'>
                <div className="footer-container">
                    <div className='footer-icon'>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-tiktok"></i>
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div className='footer-logo'>
                        <img src={ Bread } className='bread' />
                        <p>BánhMỳKX</p>
                    </div>
                    <div className='footer-address'>
                        <p>
                            Address: 60 Wall Street, New York, NY 10018 USA
                        </p>
                        <span className='new1'>|</span>
                        <p>
                            Phone: 0329002453
                        </p>
                        <span className='new1'>|</span>
                        <p>
                            Opening hours: Mon - Sat: 8:00 - 20:00
                        </p>
                    </div>
                    <div className='copyright '>
                        <p>
                            Copyright © 2023-2024
                        </p>
                    </div>
                    <div className="arrow">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;