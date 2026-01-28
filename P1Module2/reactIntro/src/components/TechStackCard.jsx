import './TechStackCard.css'

const TechStackCard = ({name, image}) => {
  return (
    <>
        <div className="techstack-card">
            <img src={image} alt={"techstack name"+name} />
        </div>
    </>
  );
};

export default TechStackCard;
