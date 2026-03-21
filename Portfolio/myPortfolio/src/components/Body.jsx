import AboutMe from './AboutMe';
import SkillsTools from './SkillsTools';
import Experience from './Experience';

function Body() {
  return (
    <main className="flex-grow">
      <AboutMe />
      <SkillsTools />
      <Experience />
    </main>
  );
}

export default Body;
