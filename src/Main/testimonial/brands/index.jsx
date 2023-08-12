import './style.css'
import Pepsi from '../../../images/pepsi2.png'
import Coca from '../../../images/coca-cola1.png'
import Goo from '../../../images/goo.png'
import Paypal from '../../../images/paypal1.png'
import ShoopeeFood from '../../../images/logoshopeefood.png'



function Brands() {
    return (
        <>
            <div className="brands">
                <div className="brand-item">
                    <img src={ Pepsi } />
                    <img src={ Coca } />
                    <img src={ Goo } />
                    <img src={ Paypal } />
                    <img src={ ShoopeeFood } />
                </div>
            </div>
        </>
  );
}

export default Brands;
