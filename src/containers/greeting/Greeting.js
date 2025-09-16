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
                      .typeString("ML Engineer")
                      .pauseFor(350)
                      .deleteAll()
                      .typeString("Researcher")
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
                  <mark data-entity="noun">MLE</mark> with 3+ years of
                  experience
                  <mark data-entity="verb">designing, developing</mark>end toend
                  ML, NLP and Data Science
                  <mark data-entity="noun">products</mark>. I have deployed{" "}
                  <mark data-entity="noun">Fraud detection</mark> and{" "}
                  <mark data-entity="noun">NLP products</mark> that are in use
                  by
                  <mark data-entity="noun">financial institutions</mark> (
                  <mark data-entity="noun">SWIFT network</mark>,{" "}
                  <mark data-entity="noun">Banks</mark> and{" "}
                  <mark data-entity="noun">NBFCs</mark>) and{" "}
                  <mark data-entity="verb">engineered</mark> real time{" "}
                  <mark data-entity="ADJ">Big Data</mark> analytics solutions
                  with <mark data-entity="skill">Spark</mark> and{" "}
                  <mark data-entity="skill">Kafka</mark>. I{" "}
                  <mark data-entity="verb">specialize</mark> in{" "}
                  <mark data-entity="skill">SQL</mark>,{" "}
                  <mark data-entity="skill">Vector Search</mark>,{" "}
                  <mark data-entity="skill">LLM tuning</mark>,{" "}
                  <mark data-entity="skill">data processing</mark> with
                  expertise in <mark data-entity="ADJ">full stack</mark>{" "}
                  <mark data-entity="noun">data science products</mark> that
                  operate under <mark data-entity="ADJ">stringent</mark> data
                  regulatory compliance.
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
