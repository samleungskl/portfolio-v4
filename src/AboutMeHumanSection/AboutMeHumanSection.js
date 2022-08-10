import './AboutMeHumanSection.css';

function AboutMeHumanSection() {
    return (
        <div className='AboutMeHumanSection'>
            <div className='aboutMeHumanTitle title'> As a human,</div>
            <div className='aboutMeHumanContainer'>
                <div className='moreAboutMeBoardgameContainer'>
                    <div className='aboutMeHumanMsg msg'>My <span className='moreAboutMeMsg coloredText'>❤</span> boardgame🎲 is <span className='moreAboutMeMsg coloredText'>Bang!</span>.</div>
                </div>
                <div className='moreAboutMeGameContainer'>
                    <div className='aboutMeHumanMsg msg'>My <span className='moreAboutMeMsg coloredText'>❤</span> game🕹 is <span className='moreAboutMeMsg coloredText'>Oxygen Not Included</span>.</div>
                </div>
                <div className='moreAboutMeSportContainer'>
                    <div className='aboutMeHumanMsg msg'>My <span className='moreAboutMeMsg coloredText'>❤</span> sport🏸 is <span className='moreAboutMeMsg coloredText'>badminton</span>.</div>
                </div>
            </div>
        </div>
    );
}

export default AboutMeHumanSection;
