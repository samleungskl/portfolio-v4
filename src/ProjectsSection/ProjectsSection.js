import './ProjectsSection.css';
import ProjectList from './ProjectList/ProjectList';

function ProjectsSection({projectsList}) {
    console.log(projectsList)
    return (
        <div className="ProjectsSection">
            <div className='ProjectsSectionTitle title'>Things I've bulit...</div>
            <ProjectList projectsList={projectsList}/>
        </div>
    );
}

export default ProjectsSection;
