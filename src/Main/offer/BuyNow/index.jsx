import './style.css'
import { Link } from 'react-router-dom';


function BuyNow() {
    return (
        <>
            <div className="buyNow">
                <div className='buyNow-content'>
                    <h1>Bread</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
                        doloribus maiores quam eum aut quae pariatur blanditiis minus tenetur vero
                        et repellendus necessitatibus. Accusantium natus fugiat sequi veniam cumque est?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
                        doloribus maiores quam eum aut quae pariatur blanditiis minus tenetur vero
                        et repellendus necessitatibus. Accusantium natus fugiat sequi veniam cumque est?
                        Accusantium natus fugiat sequi veniam cumque est?
                    </p>
                    <p>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
                        doloribus maiores quam eum aut quae pariatur blanditiis minus tenetur vero
                    </p>
                    <Link to={ "/product" }>
                        <button className='buyNow-btn'>BUY NOW &#8594;</button>
                    </Link>
                </div>
                
            </div>
        </>
  );
}

export default BuyNow;