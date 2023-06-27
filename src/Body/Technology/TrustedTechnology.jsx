import React from 'react';
import './TrustedTechnology.css';

export default function Vision() {
    const descriptionBody = "We use Business Intelligence tools like PowerBi and Tableau " +
                            "which offers a fully managed cloud-based analytical services. " + 
                            "We utilize AI to automatically categorise line-item data. " + 
                            "Machine Learning and NLP services are provided to normalize suppliers. " + 
                            "Our organisation is moving towards NET 0 Carbon Emission and the target of NET 0 will " + 
                            "will be achieved till 2030.";
    return (
        <div className="tech-vision">
            <div className="tech-heading">
                <div className="trusted">Trusted</div>
                <div className="technology">Technology</div>
                <div className="horz-line">
                    <h2><span></span></h2>
                </div>
            </div>

            <div className="description">
                <div className="description-body">{descriptionBody}</div>
            </div>
        </div>
    );
}
