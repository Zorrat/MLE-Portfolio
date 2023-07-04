import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Data Scientist")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Backend Developer")
                      .pauseFor(350)
                      .deleteAll()
                      .typeString("ML Engineer")
                      .pauseFor(350)
                      .deleteAll()
                      .typeString("Tinkerer and Researcher")
                      .pauseFor(350)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  A <mark data-entity="noun">Data Scientist</mark> and a
                  <mark data-entity="noun">SDE</mark> who
                  <mark data-entity="verb">thrives</mark> to work on end to end
                  <mark data-entity="noun">Products</mark> and{" "}
                  <mark data-entity="verb">articulate</mark> creative ideas for{" "}
                  <mark data-entity="ADJ">real world</mark>
                  problems in order to build{" "}
                  <mark data-entity="ADJ">sustainable</mark> and{" "}
                  <mark data-entity="ADJ">scalable</mark> systems while ensuring
                  effective
                  <mark data-entity="skill">communication</mark> and real impact
                  with
                  <mark data-entity="skill">Data Engineering</mark> and a dash
                  of <mark data-entity="skill">Web Development</mark>.
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
