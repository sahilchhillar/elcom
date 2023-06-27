import React from 'react';
import { TiTick } from 'react-icons/ti';

import './TimeCards.css';

export default function TimeCards() {
  return (
    <div className="card-div">
        <div className="cards">

            <div className="today">
              <div className="today-button">
                <button className="today-circular-button">
                  <TiTick className="check-icon" />
                </button>
              </div>
              <div className="today-title">
                  Today
              </div>
              <div className="today-content">
                We make eProcurement smarter, more connected and transparent while helping our customers trade, and save money.
              </div>
            </div>

            <div className="tomorrow">
              <div className="tomorrow-button">
                <button className="tomorrow-circular-button">
                  <TiTick className="check-icon" />
                </button>
              </div>
              <div className="tomorrow-title">
                Tomorrow
              </div>
              <div className="tomorrow-content">
                We make eProcurement smarter, more connected and transparent while helping our customers trade, and save money.
              </div>
            </div>

            <div className="always">
              <div className="always-button">
                <button className="always-circular-button">
                  <TiTick className="check-icon" />
                </button>
              </div>
              <div className="always-title">
                Always
              </div>
              <div className="always-content">
                We make eProcurement smarter, more connected and transparent while helping our customers trade, and save money.
              </div>
            </div>
        </div>
    </div>
  );
}
