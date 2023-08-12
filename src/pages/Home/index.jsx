import './style.css'
import Introduce from '../../Main/Introduce';
import Categories from '../../Main/categories';
import Offer from '../../Main/offer';
import Testimonial from '../../Main/testimonial';

function HomePage() {
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

export default HomePage;
