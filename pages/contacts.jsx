import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
const Contacts = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        {/* <PageTitle title="Get in touch" /> */}

        {/* Section Image Large */}
        {/* <div
          className="section section-inner m-image-large scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="image">
            <div
              className="img js-parallax"
              style={{ backgroundImage: "url(assets/images/contact.jpg)" }}
            />
          </div>
        </div> */}
        {/* Section Contacts Form */}
        <div className="section section-inner m-contacts-form">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                {/* titles */}
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Get in touch
                  </div>
                </div>
                {/* contact form */}
                <div className="contacts-form">
                  <form
                    id="cform"
                    method="post"
                    action="mailto:matt@twinleaf.studio"
                  >
                    <div className="group">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <input
                          type="text"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="group full">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <textarea
                          name="message"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div
                      className="submit scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <button type="submit" className="btn">
                        Send a Message
                      </button>
                    </div>
                  </form>
                  <div className="alert-success" style={{ display: "none" }}>
                    <p>Thanks, your message is sent successfully.</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                {/* titles */}
                {/* <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Contact info
                  </h2>
                </div> */}
                {/* services */}
                {/* <div className="services-items row">
                  <style jsx>{`
                    .services-item .icon i {
                      color: #4ead6d !important;
                    }
                  `}</style>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-phone-alt" />
                      </div>
                      <div className="name">Phone:</div>
                      <div className="text">+1 (800) 123 56 89</div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-at" />
                      </div>
                      <div className="name">E-mail:</div>
                      <div className="text">matt@twinleaf.studio</div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i
                          aria-hidden="true"
                          className="fab fa-font-awesome-flag"
                        />
                      </div>
                      <div className="name">Location:</div>
                      <div className="text">Los Angeles, CA</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </Layout>
  );
};
export default Contacts;
