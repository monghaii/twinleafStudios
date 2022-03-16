import "./App.scss";
import weWealth from "./img/wewealth.png";
import fluentree from "./img/fluentree.png";
import absa from "./img/absa.png";
import yambo from "./img/yambo.png";
import matt from "./img/matt.jpg";
import EmailButton from "./components/EmailButton";
import { useState, useRef, useEffect } from "react";
import { Fade } from "react-slideshow-image";
import { Button } from "react";
import logo from "./img/twinleaf.jpg";
import InfoPane from "./components/InfoPane";
import { isMobile } from "react-device-detect";

const slideImages = [
  {
    url: weWealth,
    caption: "app designs",
    name: "weWealth",
  },
  {
    url: fluentree,
    caption: "web and mobile applications",
    name: "fluentree",
  },
  {
    url: absa,
    caption: "websites",
    name: "absa",
  },
  {
    url: yambo,
    caption: "apps",
    name: "absa",
  },
];

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
          <img src={logo} className="headerLogo inline-block" />
        </div>
        <h1 className="siteTitle text-left text-xl md:mt-3 ">
          twinleaf studios
        </h1>
      </div>
      <div className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-60">
          <div className="text-right">
            <Fade className="mockupContainer ml-auto">
              {slideImages.map((slideImage, index) => (
                <div
                  className="each-slide md:mr-10"
                  style={{
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                  key={index}
                ></div>
              ))}
            </Fade>
          </div>
          <div className=" md:mt-60 md:ml-10 ">
            <h3 className="md:mt-10 tagline text-center md:text-left">
              Media solutions for the modern business.
            </h3>
          </div>
        </div>
        {/* <hr className="mt-30" /> */}
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
        <h1 className="mt-40 mb-10 text-xl">Who's behind this?</h1>
        <div className="grid mt-15 grid-cols-1 md:grid-cols-2 text-center">
          <div className="text-center md:text-right">
            <img
              src={matt}
              className="rounded-full matt inline-block md:mr-10 mt-5 mb-5 md:mb-0"
            />
          </div>
          <div className="md:text-left inline-block description md:max-w-xs text-center md:text-left md:ml-10">
            <p>
              Thanks for stopping by! I'm Matt, a software engineer at PayPal
              and current masters candidate at the University of Southern
              California.
            </p>
            <p className="mt-3">
              I've worked with web development and digital content creation for
              over a decade, and am excited to work with you on your next big
              project. Feel free to drop me a line, and let's get started!
            </p>
          </div>
        </div>
        <div>
          <button
            className="contactButton"
            onClick={() => (window.location = "mailto:matt@twinleaf.studio")}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="bottom-0 text-xs text-center">
        © 2022 Twinleaf Studios LLC
      </div>
    </div>
  );
};

export default App;
