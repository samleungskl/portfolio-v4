import './WelcomeSection.css';

function WelcomeSection() {
    return (
        <div className='welcomeSectionBackground'>
            <div className='welcomeSectionPattern'>
                <div className='WelcomeSection marginLeftRight'>
                    <div className='welcomeTitle title'> Hi! I am Sam.</div>
                    <div className='welcomeMsg'> Welcome to my website.</div>
                    <div className='explainMsg msg'> I like front-end things and back-end things, so I decided to become a full stack developer.</div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeSection;
