import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";

const Footer = () => {
  return (
    <div className="row" id="footer">
      <div className="col-9" id="footer_text">
        Thanks for stopping by!
      </div>
      <div className="col-3" id="footer_icons">
        <a href="mailto: cassandra.moe1@gmail.com">
          <img src={email} />
        </a>
        <a href="https://www.linkedin.com/in/cassandra-moe1/">
          <img src={linkedin} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
