import { Image } from "./image";

export const Projects = (props) => {
  return (
    <div id="projects" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Some screenshots of projects</p>
        </div>
        <div className="row">
          <div className="projects-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      link={d.link}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
