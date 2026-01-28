import './ProjectCard.css'
import gitimg from '../assets/githublogo.svg'

const ProjectCard = ({title, description, imgUrl, githubLink="https://github.com/priyank1609"}) => {
  return (
    <div className="project-card">
        <div className="img-wrapper">
            <img src={imgUrl} alt="" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={githubLink} className='img-button'>
          <img src={gitimg} alt={"project Img"+title} />
          <span>View on GitHub</span>
        </a>
    </div>
  )
}

export default ProjectCard