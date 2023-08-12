import './style.css'
import Contact from './Contact'
import Logo from './Logo';
import Menu from './Menu';

function Header() {
    return (
        <>
            
            <div className="header">
                <div className='fixed'>
                    <Contact />
                    <Logo />
                    <Menu />
                </div>
            </div>
        </>
  );
}

export default Header;
