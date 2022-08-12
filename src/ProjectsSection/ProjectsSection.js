import './ProjectsSection.css';
import { useState } from 'react';

function ProjectsSection({projectsList}) {
    console.log(projectsList)
    const [projectVisible, setProjectVisible] = useState({
        apartmentHunterVisible: false,
        amazonPriceTrackerVisible: false,
        apiMockerVisible: false,
        noodlesExpressVisible: false,
    });

    const changeProjectVisible = (key, status) => {
        const result = !status
        setProjectVisible(prev => ({
            ...prev,
            [key]: result,
        }));
    };

    return (
        <div className="ProjectsSection">
            <div className='ProjectsSectionTitle title'>Things I've bulit...</div>
            <div className='mobileAndTabletVersion'>
                <div className='apartmentHungerImageAndInfo container' onClick={() => { changeProjectVisible('apartmentHunterVisible', projectVisible.apartmentHunterVisible) }}>
                    <div className='apartmentHunterContainer smallSquare largeRectangle'>
                        <div className='apartmentHunterName'>Apartment Hunter</div>
                    </div>
                    <div className='apartmentHunterInfoContainer smallSquare largeRectangle'>
                        <div className='apartmentHunterInfoTitle'>Apartment Hunter</div>
                        <div className='apartmentHunterInfoDescription'>Apartment focus real e-state website. Inspired by Airbnb and Rew.ca. Full Stack Application.</div>
                        <div className='apartmentHunterInfoIconContainer'>
                            <i className="fa-brands fa-figma infoIcon"></i>
                            <i className="fa-brands fa-github infoIcon"></i>
                            <i className="fa-solid fa-link infoIcon"></i>
                        </div>
                        <div className='apartmentHunterInfoTechStack'>React • HTML • CSS • AirTable</div>
                    </div>

                    {projectVisible.apartmentHunterVisible && <div className='apartmentHunterInfoContainerOpen smallSquare largeRectangle'>
                        <div className='apartmentHunterInfoTitle'>Apartment Hunter</div>
                        <div className='apartmentHunterInfoDescription'>Apartment focus real e-state website. Inspired by Airbnb and Rew.ca. Full Stack Application.</div>
                        <div className='apartmentHunterInfoIconContainer'>
                            <i className="fa-brands fa-figma infoIcon"></i>
                            <i className="fa-brands fa-github infoIcon"></i>
                            <i className="fa-solid fa-link infoIcon"></i>
                        </div>
                        <div className='apartmentHunterInfoTechStack'>React • HTML • CSS • AirTable</div>
                    </div>
                    }
                </div>
                <div className='tabletRow2Container'>
                    <div className='amazonPriceTrackerContainer smallSquare'>
                        <div className='amazonPriceTrackerName'>Amazon Price Tracker</div>
                    </div>
                    <div className='ApiMockerContainer smallSquare'>
                        <div className='ApiMockerName'>API Mocker</div>
                    </div>
                </div>
                <div className='tabletRow3Container'>
                    <div className='noodlesExpressContainer smallSquare'>
                        <div className='noodlesExpressName'>Noodles Express</div>
                    </div>
                    <div className='ShowMoreContainer smallSquare'>
                        <div className='ShowMoreName'>Show More</div>
                    </div>
                </div>
            </div>
            <div className='desktopVersion'>
                <div className='desktopRow1Container'>
                    <div className='apartmentHunterContainer smallSquare largeRectangle'>
                        <div className='apartmentHunterName'>Apartment Hunter</div>
                    </div>
                    <div className='amazonPriceTrackerContainer smallSquare'>
                        <div className='amazonPriceTrackerName'>Amazon Price Tracker</div>
                    </div>
                </div>
                <div className='desktopRowColumnContainer'>
                    <div className='desktopColumn1Container'>
                        <div className='ApiMockerContainer smallSquare'>
                            <div className='ApiMockerName'>API Mocker</div>
                        </div>
                        <div className='ShowMoreContainer smallSquare'>
                            <div className='ShowMoreName'>Show More</div>
                        </div>
                    </div>
                    <div className='desktopLargeSquareContainer'>
                        <div className='noodlesExpressContainer smallSquare largeSquare'>
                            <div className='noodlesExpressName'>Noodles Express</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;
