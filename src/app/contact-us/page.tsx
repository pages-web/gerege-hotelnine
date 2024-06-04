import React, { useEffect } from "react";
import Image from "next/image";

export default function page() {
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.9427590425023!2d106.91927691562725!3d47.9203818792019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969241397be823%3A0x25ecf1b5d28dad25!2sH9%20Hotel%20Nine!5e0!3m2!1sen!2smn!4v1686097682912!5m2!1sen!2smn";

  return (
    <div id="content" style={{ display: "block" }}>
      <section className="contact">
        <div id="map">
          <div style={{ width: "100%", height: "400px" }}>
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="container">
          <article>
            <div className="row">
              <div className="col-sm-4">
                <h1>Contact Us</h1>
                <ul className="contact-details">
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>Address:</span>8 Amar street, Ulaanbaatar, Mongolia
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <span>Phone:</span>
                    (976) 77114334, (976) 11330330
                  </li>
                  <li>
                    <i className="fa fa-fax" />
                    <span>Fax:</span>
                    (976) 11323847
                  </li>
                  <li>
                    <a href="mailto:reservation@hotelnine.mn">
                      <i className="fa fa-envelope" />
                      <span>E-mail:</span>
                      reservation@hotelnine.mn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <div className="selenge">
                  <ul className="contact-details">
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>Address:</span>
                    </li>
                    <li>
                      <i className="fa fa-phone" />
                      <span>Phone:</span>
                    </li>
                    <li>
                      <i className="fa fa-fax" />
                      <span>Fax:</span>
                    </li>
                    <li>
                      <a href="mailto:reservation@hotelnine.mn">
                        <i className="fa fa-envelope" />
                        <span>E-mail:</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="tsogt">
                  <ul className="contact-details">
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>Address:</span>
                    </li>
                    <li>
                      <i className="fa fa-phone" />
                      <span>Phone:</span>
                    </li>
                    <li>
                      <i className="fa fa-fax" />
                      <span>Fax:</span>
                    </li>
                    <li>
                      <a href="mailto:reservation@hotelnine.mn">
                        <i className="fa fa-envelope" />
                        <span>E-mail:</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
