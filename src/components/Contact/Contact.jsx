import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Form from "../Form/Form.jsx";
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader.jsx";
import Programs from "../HomePage/Programs/Programs.jsx";
import "./Contact.scss";

import bgImage from "../../assets/images/page-headers/contact-header.jpg";
import contactLogo from "../../assets/icons/contacts-logo.svg";

export default function Contact() {
  return (
    <>
      <Navigation type="secondary" />
      <SecondaryHeader backgroundImage={bgImage} bottom={true} />
      <section className="contact">
        <div className="conatiner">
          <div className="row">
           <div className="col-lg-3">
           <div className="contact__left-container">
          <h2 className="contact__title">Contact</h2>
        </div>
           </div>
           <div className="col-lg-7 col-12">
           <div className="contact__right-container">
          <p className="contact__intro">
          Please fill out the form below to keep yourself updated with the latest updates, products, promos, and events from Galaxy.


          </p>
          <div className="contact__paragraph">
            <Form type="contact-form" />
          </div>
          <div className="contact__contacts-container">
            <div className="contact__contacts-logo-container">
              <img
                className="contact__logo"
                src={contactLogo}
                alt="Galaxy logo"
              />
            </div>
            <div className="contact__contacts-paragraph-container">
              <p className="contact__contacts-paragraph">
                Galaxy Inc., LLC
                <br />
                700 N. Central Ave, Suite 220
                <br />
                Glendale, CA 91203
              </p>
              <p className="contact__contacts-paragraph">
                Phone: (888) 340-1840
                <br />
                Fax: (818) 937-4076
                <br />
                Email: info@galaxyinc.com
              </p>
              <p className="contact__contacts-paragraph">
                Customer Support
                <br />
                help@galaxyinc.com
                <br />
                (818) 243-1363
              </p>
            </div>
          </div>
        </div>
        </div>
           </div>
        </div>
       
    
      </section>
      <Programs />
      <Footer />
    </>
  );
}
