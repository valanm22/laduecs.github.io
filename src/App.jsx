import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Team } from "./components/team";
import { Calendar } from "./components/calendar"
import JsonData from "./data.json";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Navigation />
      <About data={landingPageData.About} />
      <Calendar/>
      <Projects data={landingPageData.Projects} />
      <Team data={landingPageData.Team} />
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; ∞ Billiam Wender and the{" "}
            <a href="https://github.com/LadueCS/laduecs.github.io/graphs/contributors">
              Ladue community
            </a>
          </p>
          <p>
            🎉🎉🎉🎉 Alright, time for the test at the end! 🎉🎉🎉🎉 I warned
            you, didn't I? Problem 1: Will you join LadueCS? Problem 2: Will you
            come to our weekly meetings? Problem 3: What is Mr. White's phone
            number?
          </p>
          <p className="troll">
            Answers: Yes, Yes, 314-XXX-XXXX (come to our meetings for the last 7
            digits)
          </p>
        </div>
      </div>
    </div>
  );
};
export default App;
