import Skill from './Skill';

export default (props) => {
  return (
    <div id="skills" className="text-center">
      <div className="container">
        <div className="section-title center">
          <h2>Skills</h2>
          <hr />
        </div>
        <div className="row">
          <Skill type="HTML" percent="95" />
          <Skill type="CSS3" percent="85" />
          <Skill type="jQuery" percent="80" />
          <Skill type="WordPress" percent="85" />
          <Skill type="Photoshop" percent="70" />
          <Skill type="Illustrator" percent="65" />
        </div>
      </div>
    </div>
  );
}