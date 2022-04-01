export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <img
            className="navbar-logo page-scroll"
            src="img/logo.png"
            alt="icon"
          />
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
          >
            LADUE COMPUTER SCIENCE
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#eventCalendar" className="page-scroll">
                Calendar
              </a>
            </li>
            <li>
              <a href="#projects" className="page-scroll">
                Projects
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="https://github.com/LadueCS" className="page-scroll">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
