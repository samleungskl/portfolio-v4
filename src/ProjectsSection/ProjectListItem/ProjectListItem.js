import './ProjectListItem.css';

function ProjectListItem({ projectName, projectDescription, projectTechStack, projectGithub, projectFigma, projectDemo, projectImage, projectRecID, projectNameNoSpace, changeProjectVisible, projectInfoVisible }) {
    const cssClassBackgroundImg = { backgroundImage: `url(${projectImage})` }
    const cssContainerClassName = `${projectNameNoSpace}Container`
    const cssProjectNameClassName = `${projectNameNoSpace}Name`
    const cssClassName = `${projectNameNoSpace}Image project`
    return (
        <div className='ProjectListItemContainer' onClick={() => {changeProjectVisible(projectRecID) }} onMouseOver={() => {changeProjectVisible(projectRecID) }} onMouseOut={() => {changeProjectVisible(projectRecID) }}>
            <div className={cssContainerClassName}>
                <div style={cssClassBackgroundImg} className={cssClassName}>
                    <div className={cssProjectNameClassName}>{projectName}</div>
                </div>
            </div>
            <div className='infoContainer' style={{ opacity: projectInfoVisible ? 0 : 1 }}>
                <div className='infoTitle'>{projectName}</div>
                <div className='infoDescription'>{projectDescription}</div>
                <div className='infoIconContainer'>
                    <a className="fa-brands fa-figma infoIcon" href={projectFigma}></a>
                    <a className="fa-brands fa-github infoIcon" href={projectGithub}></a>
                    <a className="fa-solid fa-link infoIcon" href={projectDemo}></a>
                </div>
                <div className='infoTechStack'>{projectTechStack}</div>
            </div>
        </div>
    );
}

export default ProjectListItem;
