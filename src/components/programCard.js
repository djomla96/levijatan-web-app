import React from 'react';

const programIcon = (props) => {
    return (
        <div class="single-card">
              <img src={props.img} alt="" />
              <div class="card-text">
                  <p>{props.cardText}</p>
              </div>
  
          </div>
    );
}

export default programIcon;
