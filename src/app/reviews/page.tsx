import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container">
        <h1 className="simple-header">Reviews</h1>
        <div className="reviews">
          <div className="review-item">
            <div className="row">
              <div className="col-sm-2">
                <div className="review_header">
                  <Image
                    alt=""
                    src="http://hotelnine.mn/media/hotelnine/content/sample-images/.8412999807646460446_200_x_200.jpg"
                    width={165}
                    height={165}
                  />
                  <h2>Excellent view and service</h2>
                  <h4>Malmo, Sweden</h4>
                  <div className="other_stars">
                    <strong>Value</strong>
                    <div className="stars stars4">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="clearfix" />
                    <strong>Service</strong>
                    <div className="stars stars3">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="clearfix" />
                    <strong>Rooms</strong>
                    <div className="stars">
                      <div className="stars stars2">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="space20" />
                </div>
                <div className="clearfix" />
              </div>
              <div className="col-sm-4">
                <div className="left-spacer">
                  <h3>lakecomo28</h3>
                  <div className="stars stars5 left">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="review_text">
                    <p>
                      Was here recently for a conference and was pleasantly
                      surprised by how nice and well-located this hotel is. I
                      was in a room which faced the Genghis Khan square and the
                      view at dusk was very nice. Staff were pleasant and
                      helpful. The breakfast did not have as much variety as
                      other 'better' hotels but it was sufficient.
                    </p>
                  </div>
                  <div className="space20" />
                  <div>
                    <strong>Stayed:</strong> Stayed August 2015, traveled on
                    business
                  </div>
                  <div className="space10" />
                </div>
                <div className="trip">
                  <div
                    id="TA_cdswritereviewlg824"
                    className="TA_cdswritereviewlg"
                  >
                    <ul id="ddzM57" className="TA_links FrEsDwg1AZu">
                      <li id="Hutxhud8y6D" className="OInnsfQby4">
                        <Link
                          target="_blank"
                          href="https://www.tripadvisor.com/"
                        >
                          <Image
                            src="https://www.tripadvisor.com/Image/cdsi/img2/branding/medium-logo-12097-2.png"
                            width={163}
                            height={25}
                            alt="TripAdvisor"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="review_form">
                <div className="col-sm-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
