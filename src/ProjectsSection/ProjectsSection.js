import './ProjectsSection.css';
import ProjectList from './ProjectList/ProjectList';

function ProjectsSection({projectsList, changeProjectVisible}) {
    return (
        <div className="ProjectsSection">
            <div className='ProjectsSectionTitle title'>Things I am building...</div>
            <ProjectList projectsList={projectsList} changeProjectVisible={changeProjectVisible}/>
        </div>
    );
}

export default ProjectsSection;
