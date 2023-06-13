import { skillProps, skills } from "utils/skills";
import SkillBox from "./skillBox/skillBox";
import texts from "utils/texts.json";
import "./skillSection.css";

const SkillSection = () => {
  return (
    <>
      <div className="skills-title"> {texts.SKILLS} </div>
      <div className="skills-container">
        {skills.map((skill: skillProps, index: number) => (
          <SkillBox
            name={skill.name}
            iconClass={skill.iconClass}
            percentage={skill.percentage}
            iconUrl={skill.iconUrl}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default SkillSection;
