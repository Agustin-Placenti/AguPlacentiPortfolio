import type { skillProps } from "utils/skills";
import "./skillBox.css"

const SkillBox = ({name, iconClass, percentage, iconUrl}: skillProps) => {
  return (
    <div className="skill-box">
      <div className="skill-name"> {name} </div>
      {iconClass && <i className={`skill-icon ${iconClass}`} /> }
      {iconUrl && <img className="skill-img" src={iconUrl} alt="My Icon" /> }
      <div className="skill-percentage"> {percentage}% </div>
    </div>
  )
}

export default SkillBox;
