import "./calendar.css"
import Cal from 'react-calendar';
import {useState} from 'react'
import * as csvtojson from 'csvtojson'

let csvData = null;
export const Calendar = (props) => {
  let value = new Date();

  let calculateEventBoxText = () => {
    let dateString = `${value.getMonth()+1}/${value.getDate()}/${value.getFullYear()}`;
    if(csvData === null) {
      return (<div>loading...</div>);
    }
    let entry = csvData.find(element => element[0] === dateString);
    if(entry !== undefined) {
      console.log(entry);
      return (
        <div>
          <h2>🎉Meeting Details🎉</h2>
          <h3>Group True</h3>
          <p>{entry[1] === "" ? <br/> : entry[1]}</p>
          <p>{entry[2] === "" ? <br/> : entry[2]}</p>
          <h3>Group False</h3>
          <p>{entry[3] === "" ? <br/> : entry[3]}</p>
          <p>{entry[4] === "" ? <br/> : entry[4]}</p>
        </div>  
      )
    }
    return (<div><h2>No Meeting</h2></div>)
  }

  let [eventBoxText, setEventBoxText] = useState(calculateEventBoxText());
  let calendarChangeCallback = (val, event) => {
    console.log(val);
    value = val;
    setEventBoxText(calculateEventBoxText());
  };

  if(csvData === null) {
    fetch( "schedule.csv" )
    .then(async response => {
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value)
      csvtojson({
        output: "csv"
      })
      .fromString(csv)
      .then(function(result){
        csvData = result;
        setEventBoxText(calculateEventBoxText());
      })
      .catch(err => {
        console.log(err);
      })
    }).catch(err => {
      console.error(err);
    });
  }
  

  return (
      <div class="calendar" style={{marginTop: "5em"}}>
        <div class="container text-center calendar-container" style={{paddingBottom: "10px"}}>
          <div className="text-center section-title" style={{marginBottom: "5em"}}>
            <h2>Calendar</h2>
          </div>
          <div class="row" style={{height: "auto"}}>
            <div align="center" class="col-md-6" style={{marginBottom: "100px"}}>
              <Cal onChange={calendarChangeCallback} value={value} />
            </div>
            <div class="col-md-6" style={{height: "auto"}}>
              {eventBoxText}             
            </div>
          </div>
        </div>
      </div>
  );
}
