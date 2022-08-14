import './Header.css';
import BottomNavMenu from './BottomNavMenu/BottomNavMenu';
import Logo from './Logo/Logo';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import FullSizeNavMenu from './FullSizeNavMenu/FullSizeNavMenu';

function Header() {
    return (
        <div className="Header">
            <div className='logoMenuContainer'>
                <div className='logoMenuWidthContainer'>
                    <div className='logoContainer'>
                        <Logo />
                    </div>
                    <div className='HamburgerMenuContainer'>
                        <HamburgerMenu />
                    </div>
                    <div className='fullSizeNavMenuContainer'>
                        <FullSizeNavMenu />
                    </div>
                </div>
            </div>
            <div className='bottomNavMenuContainer'>
                <BottomNavMenu />
            </div>
        </div>
    );
}

export default Header;
