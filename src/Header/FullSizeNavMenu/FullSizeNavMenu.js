import './FullSizeNavMenu.css';
import MessageButton from '../../MessageButton/MessageButton';

function FullSizeNavMenu() {
    return (
        <div className="FullSizeNavMenu">
            <a className='navAboutMe navItem' href='#about-me'>About Me</a>
            <a className='navMyProjects navItem' href='#projects'>My projects</a>
            <MessageButton buttonText='Send a Message' hrefUrl='mailto: samleungskl@gmail.com'/>
        </div>
    );
}

export default FullSizeNavMenu;
