import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <div className="content-overlay"></div>
            <div
              className="cert-header"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={require(`../../assets/certificates/${certificate.logo_path}`)}
                alt={certificate.alt_name}
              />
            </div>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
              <a
                style={{ color: theme.text }}
                href={certificate.certificate_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={`fas fa-external-link-alt`}
                  style={{ paddingLeft: "10px" }}
                ></i>
              </a>
            </h2>
            <h3 className="cert-body-subtitle" style={{ color: theme.orange }}>
              {certificate.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
