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
                      .pauseFor(800)
                      .deleteAll()
                      .typeString("Engineer")
                      .pauseFor(500)
                      .deleteAll()
                      .typeString("Blockchain and Crypto")
                      .pauseFor(500)
                      .deleteAll()
                      .typeString("Researcher")
                      .pauseFor(700)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <div
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  I am a <mark data-entity="noun">Data Scientist</mark>,
                  <mark data-entity="noun"> Engineer</mark>, and
                  <mark data-entity="noun"> Researcher</mark> with 3+ years of
                  experience building secure
                  <mark data-entity="noun"> backend systems</mark>,
                  <mark data-entity="noun"> ML products</mark>, and
                  <mark data-entity="noun"> privacy-preserving protocols</mark>.
                  My work spans
                  <mark data-entity="skill"> NLP</mark>,
                  <mark data-entity="skill"> graph analytics</mark>,
                  <mark data-entity="skill"> distributed systems</mark>, and
                  <mark data-entity="skill"> blockchain applications</mark>. I
                  have built infrastructure used across
                  <mark data-entity="noun"> SWIFT-connected institutions</mark>,
                  <mark data-entity="noun"> banks</mark>, and
                  <mark data-entity="noun"> NBFCs</mark>, while also researching
                  <mark data-entity="noun"> Bitcoin analytics</mark>,
                  <mark data-entity="noun"> FHE-based computation</mark>, and
                  <mark data-entity="noun"> DeFi systems</mark> through work
                  with <mark data-entity="noun">Columbia University</mark> and
                  <mark data-entity="noun"> SUNY Buffalo</mark>.
                </div>
              </div>
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
