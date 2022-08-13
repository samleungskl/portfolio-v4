import './BottomNavMenu.css';

function BottomNavMenu() {
    return (
        <div className="BottomNavMenu">
            <a className='bottomNavItemContainer' href='#about-me'>
                <i className="fa-regular fa-user bottomNavItemIcon"></i>
                <div className='bottomNavItemLabel'>About</div>
            </a>
            <a className='bottomNavItemContainer' href='#projects'>
                <i className="fa-regular fa-file bottomNavItemIcon"></i>
                <div className='bottomNavItemLabel'>Pojects</div>
            </a>
            <a className='bottomNavItemContainer' href='#contact'>
                <i className="fa-regular fa-envelope bottomNavItemIcon"></i>
                <div className='bottomNavItemLabel'>Contact</div>
            </a>
        </div>
    );
}

export default BottomNavMenu;
