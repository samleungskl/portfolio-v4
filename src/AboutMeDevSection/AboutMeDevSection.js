import './AboutMeDevSection.css';

function AboutMeDevSection() {
    return (
        <div className='AboutMeDevSection'>
            <div className='titleAndMsgContainer'>
                <div className='aboutMeTitle title'> As a developer,</div>
                <div className='aboutMeMsg msg'> I like building things related to <span className='coloredText'>Automation</span> and <span className='coloredText'>Data Vistualization</span>.</div>
            </div>
            <div className='emojisContainer'>
                <div className='aboutMeEmojis'>🤖</div>
                <div className='aboutMeEmojis'>📊</div>
            </div>
        </div>
    );
}

export default AboutMeDevSection;
