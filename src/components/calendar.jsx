import "./calendar.css"
import React, { useState } from 'react';
import Cal from 'react-calendar';


export const Calendar = (props) => {

  let file = new File([], "public/schedule.csv");

    fetch( "schedule.csv" )
    .then(async response => {
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value)
      console.log(csv);
    }).catch(err => {
      console.error(err);
    });

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