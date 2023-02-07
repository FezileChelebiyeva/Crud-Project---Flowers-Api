import React from "react";
import "./index.scss";
const EventsCard = () => {
  return (
    <div id="events">
      <div className="container">
        <div className="events">
          <p>Devoted to wonderful beauty</p>
          <h1>Events Pricing</h1>
          <div className="cards">
            <div className="card">
              <div className="head">
                <h1>$16</h1> <p>per table</p>
              </div>
              <h2>Birthday Events</h2>
              <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              <div className="btn">
                <button>Shop now</button>
              </div>
            </div>
            <div className="card">
              <div className="head">
                <h1>$31</h1> <p>per table</p>
              </div>
              <h2>Wedding Events</h2>
              <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              <div className="btn">
                <button>Shop now</button>
              </div>
            </div>
            <div className="card">
              <div className="head">
                <h1>$52</h1> <p><small>per table</small></p>
              </div>
              <h2>Party Events</h2>
              <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              <div className="btn">
                <button>Shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
