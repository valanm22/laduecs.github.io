import "./calendar.css"
import React, { useState } from 'react';
import Cal from 'react-calendar';


export const Calendar = (props) => {

  let value = new Date();
  let calendarChangeCallback = (val, event) => {
    console.log(val);
    value = val;
  };

  return (
      <div class="calendar">
        <div className="text-center section-title">
          <h2>Calendar</h2>
        </div>
        <div class="container text-center calendar-container" style={{paddingBottom: "10px"}}>
          <div class="row" style={{height: "auto"}}>
            <div align="center" class="col-md-6" style={{marginBottom: "100px"}}>
              <Cal onChange={calendarChangeCallback} value={value} />
            </div>
            <div class="col-md-6" style={{height: "auto"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error reiciendis esse perspiciatis, iusto laboriosam rerum nisi beatae tempora repellendus ea officia pariatur vitae fugiat aliquid dolorem saepe sit autem deserunt dolorum eos. Minima ipsa excepturi, at ea, voluptate nemo ipsam, omnis aperiam eius unde facilis consequuntur doloremque modi quam.
            </div>
          </div>
        </div>
      </div>
  );
}