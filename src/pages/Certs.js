import "../styles/Project.css";
import MuleAssoc from "../assets/muleAssoc.png";
import SfAssoc from "../assets/sfAssoc.png";
import SfAI from "../assets/sfAI.png";
import MuleDev from "../assets/muleDev.png";

const Certs = () => {
    const verificationLink = "https://trailhead.salesforce.com/en/credentials/verification/";

    return (
        <div className="page-container">
        <h1 className="project-heading">Certifications</h1>
        <div className="verification-container"> 
            <a href={verificationLink}  target="_blank" rel="noopener noreferrer" className="btn btn-light">Verify Salesforce Certifications</a>
        </div>
        <div className="project-container">
            <div className="project-card">
            <img src={MuleDev} alt="Salesforce Certified MuleSoft Developer I" />
            <h4 className="project-title">Salesforce Certified MuleSoft Developer I</h4>
            <div className="cert-details">
                <p>As a MuleSoft Certified Developer, I am skilled in designing, building, and managing integration solutions using Mule 4. 
                    I possess expertise in API development, data transformation, and error handling, enabling me to effectively connect and streamline systems.</p>
            </div>
            </div>
            <div className="project-card">
            <img src={MuleAssoc} alt="Salesforce Certified MuleSoft Associate" />
            <h4 className="project-title">Salesforce Certified MuleSoft Associate</h4>
            <div className="cert-details">
                <p>As a MuleSoft Certified Associate, I have a foundational understanding of integration concepts and the benefits of Anypoint Platform. 
                    I can effectively contribute to MuleSoft projects as part of a team.</p>
            </div>
            </div>
            <div className="project-card">
            <img src={SfAI} alt="Salesforce Certified AI Associate" />
            <h4 className="project-title">Salesforce Certified AI Associate</h4>
            <div className="cert-details">
                <p>As a Salesforce AI Associate, I am skilled in applying AI principles to solve business problems while ensuring data quality, ethics, and security. 
                    I can effectively use Salesforce's AI tools to build and deploy AI-driven solutions that align with organizational goals.</p>
            </div>
            </div>
            <div className="project-card">
            <img src={SfAssoc} alt="Salesforce Certified Associate" />
            <h4 className="project-title">Salesforce Certified Associate</h4>
            <div className="cert-details">
                <p>As a Salesforce Certified Associate, I have a foundational understanding of CRM and Salesforce. 
                    I can effectively use basic Salesforce features and contribute to Salesforce projects.</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Certs;