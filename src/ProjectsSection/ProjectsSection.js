import './ProjectsSection.css';
import amazonPriceTrackerSquare from '../assets/images/amazon-price-tracker-square.png'
import apartmentHunterRectangle from '../assets/images/apartment-hunter-rectangle.png'
import apartmentHunterSquare from '../assets/images/apartment-hunter-square.png'
import apiMockerSquare from '../assets/images/api-mocker-square.png'
import noodlesExpressSquare from '../assets/images/noodles-express-square.png'

function ProjectsSection() {
    return (
        <div className="ProjectsSection">
            <div className='ProjectsSectionTitle title'>Things I've bulit...</div>
            <div className='mobileAndTabletVersion'>
                <div className='apartmentHunterContainer smallSquare largeRectangle'>
                    <div className='apartmentHunterName'>Apartment Hunter</div>
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
