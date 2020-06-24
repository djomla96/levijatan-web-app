import React from 'react';

const programIcon = (props) => {
    return (
        <div className="single-card">
              <img src={props.img} alt="" />
              <div className="card-text">
                  <p>{props.cardText}</p>
              </div>
  
          </div>
    );
}

export default programIcon;
