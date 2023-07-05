import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./datascience/DataScienceImg";
import FullStackImg from "./web/FullStackImg";
import DesignImg from "./cloud/cloud";

function GetSkillSvg(props) {
  switch (props.fileName) {
    case "DataScienceImg":
      return <DataScienceImg theme={props.theme} />;

    case "FullStackImg":
      return <FullStackImg theme={props.theme} />;

    default:
      return <DesignImg theme={props.theme} />;
  }
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={1500}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
              <div className="skills-text-div">
                <Fade right duration={700}>
                  <h1 className="skills-heading" style={{ color: theme.blue }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1000}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={1500}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.text }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
