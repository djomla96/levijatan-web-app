import React from 'react';

const programIcon = (props) => {
    return (
        <div class="single-card">
             
              <div class="card-text">
                  {props.cardText()}
              </div>
  
          </div>
    );
}

export default programIcon;
