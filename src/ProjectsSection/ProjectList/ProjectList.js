import ProjectListItem from '../ProjectListItem/ProjectListItem';
import './ProjectList.css';

function ProjectList({projectsList, changeProjectVisible}) {
    const results = projectsList.map((element)=>{
        return <ProjectListItem 
        projectName={element.projectName}
        projectDescription={element.projectDescription}
        projectTechStack={element.projectTechStack}
        projectGithub={element.projectGithub}
        projectFigma={element.projectFigma}
        projectDemo={element.projectDemo}
        projectImage={element.projectImage}
        projectNameNoSpace={element.projectNameNoSpace}
        projectRecID={element.projectRecID}
        changeProjectVisible={changeProjectVisible}
        projectInfoVisible={element.projectInfoVisible}
        key={element.projectRecID}/>
    })
    return (
        <div className='ProjectList'>
            {results}
        </div>
    );
}

export default ProjectList;
