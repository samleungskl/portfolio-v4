import './BottomNavMenu.css';

function BottomNavMenu() {
    return (
        <div className="BottomNavMenu">
            <a className='bottomNavItemContainer' href='#about-me'>
                <i class="fa-regular fa-user bottomNavItemIcon"></i>
                <div className='bottomNavItemLabel'>About</div>
            </a>
            <a className='bottomNavItemContainer' href='#projects'>
                <i class="fa-regular fa-file bottomNavItemIcon"></i>
                <div className='bottomNavItemLabel'>Pojects</div>
            </a>
            <a className='bottomNavItemContainer' href='mailto: samleungskl@gmail.com'>
                <i class="fa-regular fa-envelope bottomNavItemIcon"></i>
                <div className='bottomNavItemLabel'>Contact</div>
            </a>
        </div>
    );
}

export default BottomNavMenu;
