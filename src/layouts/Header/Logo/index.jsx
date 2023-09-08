import './style.css'
import Bread from '../../../images/bread.ico'
import { Link } from 'react-router-dom';


function Logo ()
{
    return (
        <>
            <Link to={"/"}>
                <div className='logo'>
                    <div className='logo-icon'>
                        <img src={ Bread } className='bread' />
                        <p>BánhMỳKX</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Logo;