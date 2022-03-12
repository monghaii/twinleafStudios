import "./App.scss";
import weWealth from "./img/wewealth.png";
import matt from "./img/matt.jpg";
import EmailButton from "./components/EmailButton";
import { useState } from "react";
import { Fade } from "react-slideshow-image";
import { Button } from "react";
import logo from "./img/twinleaf.jpg";

const slideImages = [
  {
    url: weWealth,
    caption: "app designs",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 3",
  },
];

const App = () => {
  const [showInfoPane, setShowInfoPane] = useState(false);

  const handleServiceClick = () => {
    // if (!showInfoPane) setShowInfoPane(true);
  };

  return (
    <div className="App">
      <div className="header grid grid-cols-2 top-8">
        <div className="text-right iconBox">
          <img src={logo} className="headerLogo inline-block" />
        </div>
        <h1 className="siteTitle text-left">twinleaf studios</h1>
      </div>
      <div className="text-center">
        <div className="grid grid-cols-2 mt-40">
          <div className="text-right">
            <Fade className="mockupContainer ml-auto">
              {slideImages.map((slideImage, index) => (
                <div
                  className="each-slide"
                  style={{
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                  key={index}
                ></div>
              ))}
            </Fade>
          </div>
          <div className="ml-10">
            <h3 className="tagline">
              Media solutions for the modern business.
            </h3>
          </div>
        </div>
        {/* <hr className="mt-30" /> */}
        <h1 className="mt-10 mb-10">Our Services</h1>
        <div className="servicesContainer grid grid-cols-3 gap-x-7 gap-y-2 inline-block">
          <div className="servicePane p-5" onClick={handleServiceClick}>
            <h2>Branding</h2>
            <p>We reimagine your brand's image according to your goals.</p>
          </div>

          <div className="servicePane p-5" onClick={handleServiceClick}>
            <h2>Web Services</h2>
            <p>
              We set up and manage an entire professional web presence for you.
            </p>
          </div>
          <div className="servicePane p-5" onClick={handleServiceClick}>
            <h2>Digital Marketing</h2>
            <p>
              We generate new leads for your business with unique marketing
              strategies.
            </p>
          </div>
          {showInfoPane && (
            <div
              className="infoPane p-5 col-span-3"
              onClick={handleServiceClick}
            >
              <h2>sdf</h2>
              <p>sdf</p>
            </div>
          )}
          <div className="servicePane p-5" onClick={handleServiceClick}>
            <h2>UI/UX Design</h2>
            <p>
              We generate interactive mock-ups to test and validate your next
              business idea.
            </p>
          </div>
          <div className="servicePane p-5" onClick={handleServiceClick}>
            <h2>Digital Media</h2>
            <p>
              We create digital content for your business in the form of videos,
              images, and audio.
            </p>
          </div>
          <div className="servicePane p-5" onClick={handleServiceClick}>
            <h2>Apps</h2>
            <p>
              We create web and mobile applications for your business from
              scratch.
            </p>
          </div>
        </div>
        <h1 className="mt-40 mb-10">Who's behind this?</h1>
        <div className="grid grid-cols-2 mt-15">
          <div className="text-right">
            <img
              src={matt}
              className="rounded-full matt inline-block mr-10 mt-5"
            />
          </div>
          <div className="text-left description max-w-xs">
            <p>
              Thanks for stopping by! I'm Matt, a software engineer at PayPal
              and current masters candidate at the University of Southern
              California.
            </p>
            <p className="mt-3">
              I've worked with web development and digital media for as long as
              I can remember, and am excited to work with you on your next big
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
