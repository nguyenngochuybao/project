import './style.css'
import avt_1 from '../../../images/avt-1.jpg'
import avt_2 from '../../../images/avt-2.jpg'
import avt_3 from '../../../images/avt-3.jpg'


function Evaluate ()
{
    return (
        <>
            <div className="evaluate">
                <h2 className='title-h2'>
                    MEET OUR CHEFS
                </h2>
                <div className='evaluate-container'>
                <div className="evaluate-item">
                    <div className='contact-item'></div>
                    <div className='contact-icon'>
                            <i class="fa-solid fa-phone"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <img src={ avt_1 } />
                    <h3>
                        BRANDON RAZER
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                </div>
                <div className="evaluate-item">
                    <div className='contact-item'></div>
                    <div className='contact-icon'>
                            <i class="fa-solid fa-phone"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                    <img src={ avt_2 } />
                    <h3>
                        BRANDON RAZER
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                </div>
                <div className="evaluate-item">
                    <div className='contact-item'></div>
                    <div className='contact-icon'>
                            <i class="fa-solid fa-phone"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                    <img src={ avt_3 } />
                    <h3>
                        BRANDON RAZER
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                </div>
                </div>         
            </div>
        </>
    );
}

export default Evaluate;
