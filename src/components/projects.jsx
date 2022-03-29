import { Image } from "./image";

export const Projects = (props) => {
  return (
    <div id="projects" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>
            Check out our projects! (Bad layout intentional for <b>AESTHETIC</b>{" "}
            purposes)
          </p>
        </div>
        <div className="row">
          <div className="projects-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image title={d.title} link={d.link} image={d.image} />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
