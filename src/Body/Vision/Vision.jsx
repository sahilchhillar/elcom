import React from 'react';
import './Vision.css';

export default function Vision() {
    const descriptionBody = "Simplify, optimise and energise your Supply Chain with flexible easy-to-connect eProcurement, " +
                                "eCommerce, eFunding and eInventory technology. Elcom provides digital and automated contracting, " +
                                "purchasing, invoice handling, inventory management and innovative supplier solutions. " +
                                "We see our solutions as a catalyst for tangible and sustainable community benefit.";
    return (
        <div className="vision">
            <div className="heading">
                <div className="optimised">Optimised</div>
                <div className="supply-chain">Supply Chain</div>
                <div className="horz-line">
                    <h2><span></span></h2>
                </div>
            </div>

            <div className="description">
                <div className="descriptive-heading">Whether you are buying or supplying</div>
                <div className="description-body">{descriptionBody}</div>
            </div>
        </div>
    );
}
