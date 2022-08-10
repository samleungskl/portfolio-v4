import ProfileImage from '../ProfileImage/ProfileImage';
import './SplashSection.css';

function SplashSection() {
    return (
        <div className='SplashSection'>
            <div className='titleAndSubTitleContainer'>
                <h1 className='splashTitle title'>Full Stack <br></br>Web Developer</h1>
                <h2 className='splashSubtitle subtitle'>I build things to makes life easier.</h2>
            </div>
            <div className='profileImageContainer'>
                <ProfileImage />
            </div>
        </div>
    );
}

export default SplashSection;
