import './ProjectListItem.css';

function ProjectListItem({ projectName, projectDescription, projectTechStack, projectGithub, projectFigma, projectDemo, projectImage, projectRecID, projectNameNoSpace, changeProjectVisible, projectInfoHide }) {
    const cssClassBackgroundImg = { backgroundImage: `url(${projectImage})` }
    const cssContainerClassName = `${projectNameNoSpace}Container`
    const cssProjectNameClassName = `${projectNameNoSpace}Name`
    const cssClassName = `${projectNameNoSpace}Image project`
    const cssInfoContainer = `${projectNameNoSpace}InfoContainer infoContainer`
    return (
        <div className='ProjectListItemContainer' onClick={() => {changeProjectVisible(projectRecID, 'click') }} onMouseEnter={() => {changeProjectVisible(projectRecID, 'hoverIn') }} onMouseLeave={() => {changeProjectVisible(projectRecID, 'hoverOut') }} 
        >
            <div className={cssContainerClassName}>
                <div style={cssClassBackgroundImg} className={cssClassName}>
                    <div className={cssProjectNameClassName}>{projectName}</div>
                </div>
            </div>
            <div className={cssInfoContainer} style={{ opacity: projectInfoHide ? 0 : 1 }}>
                <div className='infoTitle'>{projectName}</div>
                <div className='infoDescription'>{projectDescription}</div>
                <div className='infoIconContainer'>
                    <a className="fa-brands fa-figma infoIcon" href={projectFigma}><span className='screenReader'>Figma</span></a>
                    <a className="fa-brands fa-github infoIcon" href={projectGithub}><span className='screenReader'>Github</span></a>
                    <a className="fa-solid fa-link infoIcon" href={projectDemo}><span className='screenReader'>Demo</span></a>
                </div>
                <div className='infoTechStack'>{projectTechStack}</div>
            </div>
        </div>
    );
}

export default ProjectListItem;
