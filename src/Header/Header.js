import './Header.css';
import BottomNavMenu from './BottomNavMenu/BottomNavMenu';
import Logo from './Logo/Logo';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import FullSizeNavMenu from './FullSizeNavMenu/FullSizeNavMenu';

function Header() {
    return (
        <div className="Header">
            <div className='LogoMenuContainer'>
                <div className='logoContainer'>
                    <Logo />
                </div>
                <div className='HamburgerMenuContainer'>
                    <HamburgerMenu />
                </div>
                <div className='FullSizeNavMenuContainer'>
                    <FullSizeNavMenu />
                </div>
            </div>
            <div className='bottomNavMenuContainer'>
                <BottomNavMenu />
            </div>
        </div>
    );
}

export default Header;
