import React from "react";
import "./Footer.css";
import Logo from "../../img/sritlogo.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: "var(--orange" }}>
      <div className="f-left">
        <img
          src={Logo}
          alt=""
          style={{
            width: "5rem",
            heigh: "5rem",
          }}
        />
        <span>
          Thank you for visiting our website..!! If you want to do some enquiry
          about the courses kindly contact us through either mail, call or visit
          our institue. We shal be glad to teach you and make your programming
          carrier easy.
        </span>
      </div>
      <div className="f-mid">
        <span>Contact</span>
        <div className="f-contact">
          <div>
            <a href="http://surl.li/cydmg" target="_blank" rel="noreferrer">
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#454545", fontSize: "18px" }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    color: "var(--black)",
                    fontFamily: "monospace",
                  }}
                >
                  {" "}
                  Patna
                </span>
              </i>
            </a>
          </div>
          <div>
            <a
              href="https://www.truecaller.com/search/in/%209234276712"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-solid fa-phone"
                style={{ color: "#454545", fontSize: "18px" }}
              >
                <span
                  style={{
                    fontSize: "16.5px",
                    color: "var(--black)",
                    fontFamily: "monospace",
                  }}
                >
                  {" "}
                  9234276712
                </span>
              </i>
            </a>
          </div>
          <div>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-solid fa-envelope"
                style={{ color: "#454545", fontSize: "18px" }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    color: "var(--black)",
                    fontFamily: "monospace",
                    marginLeft: "5px",
                  }}
                >
                  sritcomputerclasses
                </span>
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="f-right">
        <span
          style={{
            marginLeft: "-8.1rem",
          }}
        >
          Follow Us
        </span>
        <div className="f-social" style={{ display: "flex", gap: "0.5rem" }}>
          <div>
            <a
              href="https://github.com/SRIT-ComputerCLasses"
              target="_blank"
              rel="noreferrer"
            >
              <i id="f-social" className="i-social fa-brands fa-github"></i>{" "}
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/saurabh-shivam-1b50931a5/"
              target="_blank"
              rel="noreferrer"
            >
              <i id="f-social" className="i-social fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/sritcomputerclasses/"
              target="_blank"
              rel="noreferrer"
            >
              <i id="f-social" className="i-social fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
