import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SplashSection from './SplashSection/SplashSection';
import WelcomeSection from './WelcomSection/WelcomeSection';
import AboutMeDevSection from './AboutMeDevSection/AboutMeDevSection';
import AboutMeHumanSection from './AboutMeHumanSection/AboutMeHumanSection';
import GetInTouchSection from './GetInTouchSection/GetInTouchSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';

import useApplicationData from './hooks/useApplicationData';
function App() {
  const { state } = useApplicationData();
  // console.log(state)

  return (
    <div className="App">
      <Header />
      <section className='splashSectionContainer marginLeftRight marginTopBottom'>
        <SplashSection />
      </section>
      <section className='welcomeSectionContainer marginTopBottom'>
        <WelcomeSection />
      </section>
      <section className='ProjectsSectionContainer marginTopBottom marginLeftRight' id='projects'>
        <ProjectsSection projectsList={state.projects}/>
      </section>
      <section className='aboutMeSectionContainer marginLeftRight marginTopBottom' id='about-me'>
        <AboutMeDevSection />
      </section>
      <section className='AboutMeHumanSectionContainer marginLeftRight marginTopBottom'>
        <AboutMeHumanSection />
      </section>
      <section className='getInTouchSectionContainer marginLeftRight marginTopBottom'>
        <GetInTouchSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;
