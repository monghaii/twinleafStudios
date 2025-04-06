import React from "react";
import { isMobile } from "react-device-detect";
import "./styles.scss";

export default function InfoPane({ service = "Web Services" }) {
  return (
    <div className={`infoPane ${isMobile ? 'p-0 pb-5' : 'p-10 infoPaneDesktop'}`}>
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
          for your desired demographics on Facebook, Instagram, Yelp, and more.
          We can also take care of all of your PR needs -- no more hounding Yelp
          for your reviews!
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
      {service === "Lead Generation" && (
        <div>
Looking to boost your business's growth and increase sales? We are experts in lead generation, helping our clients generate high-quality leads and fuel their sales pipeline. With our strategic approach and proven techniques, we identify and engage with potential customers who are genuinely interested in your products or services. From implementing targeted marketing campaigns to leveraging cutting-edge technologies, we optimize your lead generation efforts to deliver tangible results. Let us take care of producing leads for your business so you can focus on what you do best - closing deals and expanding your customer base.
        </div>
      )}
    </div>
  );
}
