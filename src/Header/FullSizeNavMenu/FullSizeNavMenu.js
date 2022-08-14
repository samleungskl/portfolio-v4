import './FullSizeNavMenu.css';
import MessageButton from '../../MessageButton/MessageButton';

function FullSizeNavMenu() {
    return (
        <div className="FullSizeNavMenu">
            <a className='navAboutMe navItem' href='#about-me'>About Me</a>
            <a className='navMyProjects navItem' href='#projects'>My Projects</a>
            <a className='navMyContact navItem' href='#contact'>Contact</a>
        </div>
    );
}

export default FullSizeNavMenu;
