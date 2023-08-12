import './style.css'
import FeaturedProducts from './FeaturedProducts';
import LatestProducts from './LatestProducts';

import banhMy1 from '../../images/27-620x620-4.jpg'
import banhMy2 from '../../images/huong-dan-lam-banh-mi-thit-nuong-1.jpg'
import banhMy3 from '../../images/banhmycha.jpg'



function Categories() {
    return (
        <>
            <div className="categories">
                <div className="small-container">
                    <div className="background"></div>
                    <div className='bread-item'>
                        <img src={banhMy1}/>
                        <img src={banhMy2}/>
                        <img src={banhMy3}/>
                    </div>
                </div>
                <FeaturedProducts />
                <LatestProducts/>
            </div>
        </>
  );
}

export default Categories;
