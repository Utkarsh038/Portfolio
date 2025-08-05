import React, { useRef } from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import { FaDownload } from "react-icons/fa6";

function ContactMe() {
  const ref = useRef(null);

  return (
    <div>
      <section className="contact-container" ref={ref}>
        <h5>Contact Me</h5>
        <div className="contact-content">
          <div>
            <div className="social-icon">
              <div style={{ flex: 1 }}>
                <div className="contact-details-card" onClick={() => {}}>
                  <div className="icon">
                    <a
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                      href="mailto:uraj33175@gmail.com"
                    >
                      <img src="./images/mail.png" alt="" />
                    </a>
                  </div>
                </div>
                <ContactInfoCard
                  iconUrl="./images/github.png"
                  link={"https://github.com/Garrur?tab=repositories"}
                />
              </div>
              <div style={{ flex: 1 }}>
                <ContactInfoCard
                  iconUrl="./images/linkedin.png"
                  link={"https://www.linkedin.com/in/utkarsh-raj-a41174220/"}
                />
                {/* <ContactInfoCard
                  iconUrl="./images/behance.png"
                  link="https://www.behance.net/ronishilUi"
                /> */}
              </div>
              <div style={{ flex: 1 }}>
                {/* <ContactInfoCard
                  iconUrl="./images/twitter.png"
                  link="https://x.com/ronishi85665650"
                /> */}
                {/* <ContactInfoCard
                  iconUrl="./images/facebook.png"
                  link={
                    "https://www.facebook.com/profile.php?id=100073451126807"
                  }
                /> */}
              </div>
              <div className="social" style={{ flex: 1 }}>
                {/* <ContactInfoCard
                  iconUrl="./images/instagram.png"
                  link={"https://www.instagram.com/ronishil321/"}
                />
                <ContactInfoCard
                  iconUrl="./images/whatsapp.png"
                  link={"https://wa.me/+916291557796"}
                /> */}
              </div>
            </div>
            {/*  */}
            <a href="./images/UTKARSH_RAJ_RESUME.pdf" download="Utkarsh.pdf">
              <button className="resume">
                <span>
                  Download Resume <FaDownload />
                </span>
              </button>
            </a>
          </div>
          <div style={{ flex: 1 }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactMe;
