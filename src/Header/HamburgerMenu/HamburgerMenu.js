import './HamburgerMenu.css';

function HamburgerMenu() {
    return (
        <div className='hamburgerMenuContainer'>
            <div className="dropdown">
                <button className="hamburgerMenu">
                </button>
                <div className="dropdown-content">
                    <a href='#about-me' className='hamburgerMenuItem'>About</a>
                    <a href='#projects' className='hamburgerMenuItem'>Projects</a>
                    <a href='#contact' className='hamburgerMenuItem'>Contact</a>
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
