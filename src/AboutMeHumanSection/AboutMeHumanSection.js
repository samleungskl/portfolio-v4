import './AboutMeHumanSection.css';

function AboutMeHumanSection() {
    return (
        <div className='AboutMeHumanSection'>
            <div className='aboutMeHumanTitle title'> As a human,</div>
            <div className='aboutMeHumanContainer'>
                <div className='moreAboutMeBoardgameContainer'>
                    <div className='aboutMeHumanMsg msg'>My <span className='moreAboutMeMsg coloredText'>❤</span> boardgame🎲 is <a className='moreAboutMeMsg coloredText' href='https://www.dvgiochi.com/catalogo/bang/?lang=eng'>Bang!</a>.</div>
                </div>
                <div className='moreAboutMeGameContainer'>
                    <div className='aboutMeHumanMsg msg'>My <span className='moreAboutMeMsg coloredText'>❤</span> game🕹 is <a className='moreAboutMeMsg coloredText' href='https://store.steampowered.com/app/457140/Oxygen_Not_Included/'>Oxygen Not Included</a>.</div>
                </div>
                <div className='moreAboutMeSportContainer'>
                    <div className='aboutMeHumanMsg msg'>My <span className='moreAboutMeMsg coloredText'>❤</span> sport🏸 is <a className='moreAboutMeMsg coloredText' href='https://en.wikipedia.org/wiki/Badminton'>badminton</a>.</div>
                </div>
            </div>
        </div>
    );
}

export default AboutMeHumanSection;
