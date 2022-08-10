import './HamburgerMenu.css';
import hamburger from '../../assets/images/hamburger.svg'

function HamburgerMenu() {
    return (
        <div className='hamburgerMenuContainer'>
            <div className="dropdown">
                <button className="dropbtn">
                    <img className='hamburgerMenu' src={hamburger} alt='hambugerMenu'></img>
                </button>
                <div className="dropdown-content">
                    <a href='#about-me' className='hamburgerMenuItem'>About</a>
                    <a href='#projects' className='hamburgerMenuItem'>Projects</a>
                    <a href='mailto: samleungskl@gmail.com' className='hamburgerMenuItem'>Contact</a>
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
