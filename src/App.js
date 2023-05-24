import "./App.scss";
import { useState, useRef } from "react";
import logo from "./img/twinleaf.jpg";
import InfoPane from "./components/InfoPane";
import { isMobile } from "react-device-detect";

const App = () => {
  const [showInfoPane, setShowInfoPane] = useState(false);
  const [infoPaneSelection, setInfoPaneSelection] = useState("web");

  const infoPaneRef = useRef(null);

  const executeScroll = () => {
    document.getElementById("infoPane").scrollTop += 20;
    infoPaneRef.current.scrollIntoView({
      inline: "center",
      behavior: "smooth",
      smooth: "easeInOutQuart",
      block: "center",
    }); // run this function from an event handler or pass it to useEffect to execute scroll
  };

  const handleServiceClick = (service) => {
    if (!showInfoPane) setShowInfoPane(true);
    if (isMobile && showInfoPane) {
      executeScroll();
      // window.scrollBy(0, -2);
    }

    if (showInfoPane && infoPaneSelection === service) setShowInfoPane(false);
    console.log(service);
    setInfoPaneSelection(service);
  };

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
            We build businesses.
          </h3>
        </div>
        <h1 className="mt-80 mb-10 text-xl">Our Services</h1>
        <div className="servicesContainer grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-2 inline-block">
          <div
            className="servicePane p-5"
            onClick={() => handleServiceClick("Branding")}
          >
            <h2>Branding</h2>
            <p>We reimagine your brand's image according to your goals.</p>
          </div>

          <div
            className="servicePane p-5"
            onClick={() => handleServiceClick("Web Services")}
          >
            <h2>Web Services</h2>
            <p>
              We set up and manage an entire professional web presence for you.
            </p>
          </div>
          <div
            className="servicePane p-5"
            onClick={() => handleServiceClick("Digital Marketing")}
          >
            <h2>Digital Marketing</h2>
            <p>
              We generate new leads for your business with unique marketing
              strategies.
            </p>
          </div>
          {showInfoPane && (
            <span className="md:col-span-3" id="infoPane" ref={infoPaneRef}>
              <InfoPane service={infoPaneSelection} />
            </span>
          )}
          <div
            className="servicePane p-5"
            onClick={() => handleServiceClick("UI/UX Design")}
          >
            <h2>UI/UX Design</h2>
            <p>
              We generate interactive mock-ups to test and validate your next
              business idea.
            </p>
          </div>
          <div
            className="servicePane p-5"
            onClick={() => handleServiceClick("Digital Media")}
          >
            <h2>Digital Media</h2>
            <p>
              We create digital content for your business in the form of videos,
              images, and audio.
            </p>
          </div>
          <div
            className="servicePane p-5"
            onClick={() => handleServiceClick("Apps")}
          >
            <h2>Apps</h2>
            <p>
              We create web and mobile applications for your business from
              scratch.
            </p>
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
