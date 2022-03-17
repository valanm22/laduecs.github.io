export const About = (props) => {
  return (
    <div id="about" className='text-center'>
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        <div className="row">
          <div className="about-text">
            <p>{props.data ? props.data.paragraph : "loading..."}</p>
            <h3>Join Us!</h3>
            <div className="list-style">
              <ul>
                {props.data
                  ? props.data.Why.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))
                  : "loading"}
              </ul>
            </div>
          </div>
          <div className='row'>
          {props.data
            ? props.data.Features.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  );
};
