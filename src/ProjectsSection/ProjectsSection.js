import './ProjectsSection.css';
import ProjectList from './ProjectList/ProjectList';

function ProjectsSection({projectsList, changeProjectVisible}) {
    console.log(projectsList)
    return (
        <div className="ProjectsSection">
            <div className='ProjectsSectionTitle title'>Things I've bulit...</div>
            <ProjectList projectsList={projectsList} changeProjectVisible={changeProjectVisible}/>
        </div>
    );
}

export default ProjectsSection;
