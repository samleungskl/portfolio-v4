import './ProfileImage.css';
import profileImage from '../assets/images/profileImage.png'

function ProfileImage() {
    return (
        <img className="ProfileImage" src={profileImage} alt='profileIamge'>
        </img>
    );
}

export default ProfileImage;
