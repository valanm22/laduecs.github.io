export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>The Team</h2>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <a href={d.website} target="_blank" rel="noreferrer">
                      <img src={d.img} alt="..." className="team-img" />
                    </a>
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p
                        class="description-text text-center"
                        dangerouslySetInnerHTML={{ __html: d.job }}
                      ></p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
