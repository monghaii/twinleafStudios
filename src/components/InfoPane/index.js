import React from "react";
import "./styles.scss";

export default function InfoPane({ service = "Web Services" }) {
  return (
    <div className="infoPane  p-10">
      <h2 className="text-xl mb-5">{service}</h2>
      {service === "Branding" && (
        <div>
          Looking to redesign your brand? We can provide logos, flyers,
          brochures, colors, and other branding assets to keep it fresh.
        </div>
      )}
      {service === "Web Services" && (
        <div>
          <div>
            <p className="mb-5">
              Is your site modern? Responsive? Accessible? We can create the
              website your business deserves and take care of the domain,
              hosting, SSL, SEO, business emails, and digital operations for
              you.
            </p>
            <p>
              Want custom functionality on your site? We use a combination of
              easily editable website templates along with custom code to suit
              your exact business needs, while making content changes a breeze.
            </p>
          </div>
        </div>
      )}
      {service === "Digital Marketing" && (
        <div>
          Imagine how your business could grow with a proper digital marketing
          strategy. We can manage your SEO as well as run targeted ad campaigns
          for your desired demographics on Facebook, Instagram, Google, and
          Youtube. We can also take care of all of your PR needs -- no more
          hounding Yelp for your reviews!
        </div>
      )}
      {service === "UI/UX Design" && (
        <div>
          Got a fresh new idea for your next business? Contemplating a major
          redesign of your site or app? We can provide fully-interactable
          digital mockups of your next idea to get investors on board without
          even having a product. Translate your business ideas into something
          tangible in record-breaking turnaround.
        </div>
      )}
      {service === "Digital Media" && (
        <div>
          Need supplementary media for any of your projects? With over a decade
          of experience with the intricacies of photo, video, and audio, the sky
          is truly the limit. We can do photoshoots, video spots, headshots,
          real estate photography, voiceover editing, commercial music, or
          anything else your business needs.
        </div>
      )}
      {service === "Apps" && (
        <div>
          Need the ultimate in development power? We can build out a full-stack
          web or mobile application that is ready for your first user, including
          a fully-functioning frontend and scalable backend.
        </div>
      )}
    </div>
  );
}
