import './App.css';
import FadeInSection from './FadeInSection/FadeInSection';
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
  const { state, changeProjectVisible } = useApplicationData();
  return (
    <div className="App">
      <Header />
      <FadeInSection>
        <section className='splashSectionContainer marginLeftRight'>
          <SplashSection />
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className='welcomeSectionContainer marginTopBottom'>
          <WelcomeSection />
        </section>
      </FadeInSection>
      <FadeInSection >
        <section className='ProjectsSectionContainer marginTopBottom marginLeftRight' id='projects'>
          <ProjectsSection projectsList={state.projects} changeProjectVisible={changeProjectVisible} />
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className='aboutMeSectionContainer marginLeftRight marginTopBottom' id='about-me'>
          <AboutMeDevSection />
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className='AboutMeHumanSectionContainer marginLeftRight marginTopBottom'>
          <AboutMeHumanSection />
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className='getInTouchSectionContainer marginLeftRight marginTopBottom' id='contact'>
          <GetInTouchSection />
        </section>
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
}

export default App;
