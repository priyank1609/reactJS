import arrowImg from '../../assets/right-arrow.svg'
import ProjectCard from '../../components/ProjectCard'
import TechStackCard from '../../components/TechStackCard';
import './MainBody.css'

const MainBody = () => {
  const projectList = [
    {
      title: "Uber Clone Application",
      description:
        "In this Uber clone project, I built the backend of a ride-sharing application, implementing user authentication, driver–rider matching, trip lifecycle management, and fare calculation.",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1280px-Uber_logo_2018.svg.png",
    },
    {
      title: "AirBnb Hotel Booking Clone",
      description:
        "In this AirBnb clone project, I built the backend of a hotel booking platform, managing property listings, bookings, availability, and user authentication.",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png",
    },
    {
      title: "The LinkedIn Microservices Project",
      description:
        "In this LinkedIn microservices project, I designed and developed scalable backend services using a microservices architecture, focusing on user profiles, connections, and activity feeds.",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/2560px-LinkedIn_2021.svg.png",
    },
  ];

  const techstackList = [
    {name: "React", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/960px-React_Logo_SVG.svg.png"},
    {name: "Tailwind CSS", image: "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png"},
    {name: "ShadCN UI", image: "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png"},
    {name: "SpringBoot", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/960px-Spring_Boot.svg.png"},
    {name: "Kubernetes", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/960px-Kubernetes_logo_without_workmark.svg.png"},
    {name: "PostgreSQL", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/960px-Postgresql_elephant.svg.png"},
    {name: "MySQL", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1280px-MySQL_logo.svg.png"},
    {name: "Kafka", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Apache_Kafka_logo.svg/960px-Apache_Kafka_logo.svg.png"},
    {name: "Redis", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Redis_logo.svg/2560px-Redis_logo.svg.png"}
  ];

  return (
    <main>
        <h2 className='name-heading'>My name is Priyank</h2>

        <ol>
            <li>I like Vite, Webpack not so much</li>
            <li>Let's make the web interactive and awesome!</li>
            <li>Building cool user interfaces with React</li>
        </ol>

        <a href="" className='hire-me-button'>
            <span>Hire Me</span>
            <img src={arrowImg} alt="Right Arrow" />
        </a>

        <section className='project-section'>
          <h2>These are my projects</h2>
          <p>I build high-quality Projects of all shapes and sizes</p>

          <div className="project-container">
            {projectList.map(project => <ProjectCard {...project} key={project.title}/>)}
          </div>
        </section>

        <section className="tectstack-section">
          <h2>Technologies that I know</h2>
          <p>I have listed some of my top skills here, I know more off course</p>

          <div className="techstack-container">
            {techstackList.map(techstack => <TechStackCard {...techstack} key={techstack.name}/>)}
          </div>
        </section>
    </main>
  )
}

export default MainBody
