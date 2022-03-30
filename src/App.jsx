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
      <Calendar data={null}></Calendar>
      <Projects data={landingPageData.Projects} />
      <Team data={landingPageData.Team} />
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; ∞ Billiam Wender and the <a href="https://github.com/LadueCS/laduecs.github.io/graphs/contributors">Ladue community</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default App;
