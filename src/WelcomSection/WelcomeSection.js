import './WelcomeSection.css';

function WelcomeSection() {
    return (
        <div className='welcomeSectionBackground'>
            <div className='welcomeSectionPattern'>
                <div className='WelcomeSection marginLeftRight'>
                    <div className='welcomeTitle title'> Hi! I am Sam.</div>
                    <div className='welcomeMsg'>I build web apps.</div>
                    <div className='explainMsg msg'>I strive to build <span className='bold'>beautiful</span> and <span className='bold'>human centric</span> front-end with <br></br><span className='bold'>simple</span> and <span className='bold'>efficient</span> back-end.</div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeSection;
