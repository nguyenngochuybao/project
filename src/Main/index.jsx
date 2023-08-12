import './style.css'
import Introduce from './Introduce';
import Categories from './categories';
import Offer from './offer';
import Testimonial from './testimonial';

function Main() {
    return (
        <>
            <div className="main">
                <Introduce />
                <Categories />
                <Offer />
                <Testimonial/>
            </div>
        </>
  );
}

export default Main;
