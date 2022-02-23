import "./App.css";
import weWealth from "./img/wewealth.png";
import EmailButton from "./components/EmailButton";
import { Button } from "react";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="siteTitle">Twinleaf Studios</h1>
      </div>
      <div className="mainTextContainer">
        <table className="eyeCatcher">
          <tr>
            <td className="mockupContainer">
              <img src={weWealth} className="mockup"></img>
            </td>
            <td>
              <h3 className="thingsIdo" style={{ color: "white" }}>
                Apps
              </h3>
              <h3 className="thingsIdo" style={{ color: "#5c7adc" }}>
                Websites
              </h3>
              <h3 className="thingsIdo" style={{ color: "white" }}>
                Logos
              </h3>
              <h3 className="thingsIdo" style={{ color: "#5c7adc" }}>
                Branding
              </h3>
              <h3 className="thingsIdo" style={{ color: "white" }}>
                Video Production
              </h3>
              <h3 className="thingsIdo" style={{ color: "#5c7adc" }}>
                Music Production
              </h3>
              <h2 className="thingsIdoFinal">We do it all.</h2>
            </td>
          </tr>
        </table>
        <button
          className="contactButton"
          onClick={() => (window.location = "mailto:mattonghai@gmail.com")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default App;
