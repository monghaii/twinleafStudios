import "./App.scss";
import { useState, useRef, useEffect } from "react";
import logo from "./img/twinleaf.jpg";
import InfoPane from "./components/InfoPane";
import { isMobile } from "react-device-detect";

const App = () => {
  const [infoPaneSelection, setInfoPaneSelection] = useState("web");
  const infoPaneRef = useRef(null);

  const handleServiceClick = (service) => {
    setInfoPaneSelection(service);
  };

  useEffect(() => {
    setInfoPaneSelection("Branding");
  }, []);

  return (
    <div className="App">
      <div className="header grid grid-cols-2 top-8 md:ml-10">
        <div className="text-right iconBox ">
          <img
            src={logo}
            className="headerLogo inline-block"
            alt="Twinleaf Studios Logo"
          />
        </div>
        <h1 className="siteTitle text-left text-xl md:mt-3">
          twinleaf studios
        </h1>
      </div>
      <div className="text-center">
        <div className=" md:mt-60 md:ml-10 ">
          <h3 className="mt-60 md:mt-20 tagline text-center rainbow_text animated">
            We grow businesses.
          </h3>
        </div>
        <h1 className="mt-80 mb-10 text-xl">Our Services</h1>
        {!isMobile &&
        <span className="md:col-span-3" id="infoPane" ref={infoPaneRef}>
            <InfoPane service={infoPaneSelection} />
        </span>
        }

<div className="servicesContainer grid grid-cols-1 md:grid-cols-6 gap-x-7 gap-y-2 inline-block">
  <div
    className={`servicePane ${infoPaneSelection === "Branding" ? "selectedServicePane" : ""}`}
    onClick={() => handleServiceClick("Branding")}
  >
    {isMobile && infoPaneSelection === "Branding" ? (
      <InfoPane service={infoPaneSelection} />
    ) : (
      <h2>Branding</h2>
    )}
  </div>

  <div
    className={`servicePane ${infoPaneSelection === "Web Services" ? "selectedServicePane" : ""}`}
    onClick={() => handleServiceClick("Web Services")}
  >
    {isMobile && infoPaneSelection === "Web Services" ? (
      <InfoPane service={infoPaneSelection} />
    ) : (
      <h2>Web Services</h2>
    )}
  </div>

  <div
    className={`servicePane ${infoPaneSelection === "Digital Marketing" ? "selectedServicePane" : ""}`}
    onClick={() => handleServiceClick("Digital Marketing")}
  >
    {isMobile && infoPaneSelection === "Digital Marketing" ? (
      <InfoPane service={infoPaneSelection} />
    ) : (
      <h2>Digital Marketing</h2>
    )}
  </div>

  <div
    className={`servicePane ${infoPaneSelection === "UI/UX Design" ? "selectedServicePane" : ""}`}
    onClick={() => handleServiceClick("UI/UX Design")}
  >
    {isMobile && infoPaneSelection === "UI/UX Design" ? (
      <InfoPane service={infoPaneSelection} />
    ) : (
      <h2>UI/UX Design</h2>
    )}
  </div>

  <div
    className={`servicePane ${infoPaneSelection === "Digital Media" ? "selectedServicePane" : ""}`}
    onClick={() => handleServiceClick("Digital Media")}
  >
    {isMobile && infoPaneSelection === "Digital Media" ? (
      <InfoPane service={infoPaneSelection} />
    ) : (
      <h2>Digital Media</h2>
    )}
  </div>

  <div
    className={`servicePane ${infoPaneSelection === "Lead Generation" ? "selectedServicePane" : ""}`}
    onClick={() => handleServiceClick("Lead Generation")}
  >
    {isMobile && infoPaneSelection === "Lead Generation" ? (
      <InfoPane service={infoPaneSelection} />
    ) : (
      <h2>Lead Generation</h2>
    )}
  </div>
</div>

        <div>
          <button
            className="contactButton"
            onClick={() => (window.location = "mailto:matt@twinleaf.studio")}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="bottom-0 text-xs text-center">
        © 2023 Twinleaf Studios LLC
      </div>
    </div>
  );
};

export default App;
