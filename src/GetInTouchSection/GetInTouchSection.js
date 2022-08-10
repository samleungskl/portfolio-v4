import './GetInTouchSection.css';
import MessageButton from '../MessageButton/MessageButton';
function GetInTouchSection() {
    return (
        <div className='GetInTouchSection'>
            <div className='getInTouchTitle title'> Get in touch</div>
            <div className='getInTouchMsg msg'>I am open to new opportunities related to web development, front-end and back-end.</div>
            <div className='getInTouchButtonContainer'>
                <MessageButton buttonText='Send a Message' hrefUrl='mailto: samleungskl@gmail.com'/>
            </div>
        </div>
    );
}

export default GetInTouchSection;
