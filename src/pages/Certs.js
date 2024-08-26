import "../styles/Project.css";
import MuleAssoc from "../assets/muleAssoc.png";
import SfAssoc from "../assets/sfAssoc.png";
import SfAI from "../assets/sfAI.png";
import MuleDev from "../assets/muleDev.png";

const Certs = () => {
  return (
    <div className="page-container">
      <h1 className="project-heading">Certifications</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={MuleDev} alt="Salesforce Certified MuleSoft Developer I" />
          <h2 className="project-title">Salesforce Certified MuleSoft Developer I</h2>
          <div className="pro-details">
            <p>Description of the Salesforce Certified MuleSoft Developer I certification</p>
          </div>
        </div>
        <div className="project-card">
          <img src={MuleAssoc} alt="Salesforce Certified MuleSoft Associate" />
          <h2 className="project-title">Salesforce Certified MuleSoft Associate</h2>
          <div className="pro-details">
            <p>Description of the Salesforce Certified MuleSoft Associate certification</p>
          </div>
        </div>
        <div className="project-card">
          <img src={SfAI} alt="Salesforce Certified AI Associate" />
          <h2 className="project-title">Salesforce Certified AI Associate</h2>
          <div className="pro-details">
            <p>Description of the Salesforce Certified AI Associate certification</p>
          </div>
        </div>
        <div className="project-card">
          <img src={SfAssoc} alt="Salesforce Certified Associate" />
          <h2 className="project-title">Salesforce Certified Associate</h2>
          <div className="pro-details">
            <p>Description of the Salesforce Certified Associate certification</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certs;