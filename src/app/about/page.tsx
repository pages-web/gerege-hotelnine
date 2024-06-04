import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.9427590425023!2d106.91927691562725!3d47.9203818792019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969241397be823%3A0x25ecf1b5d28dad25!2sH9%20Hotel%20Nine!5e0!3m2!1sen!2smn!4v1686097682912!5m2!1sen!2smn";
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container">
        <article className="about">
          <div className="slider">
            <div className="swiper-container-about swiper-container-horizontal swiper-container-fade">
              <div
                id="content_gallery"
                className="swiper-wrapper"
                style={{ transitionDuration: "0ms" }}
              >
                <Link
                  href="http://hotelnine.mn/media/hotelnine/content/pages/about/222.CR2.jpg"
                  className="swiper-slide swiper-slide-prev"
                  style={{
                    backgroundImage:
                      'url("http://hotelnine.mn/media/hotelnine/content/pages/about/222.CR2.jpg")',
                    width: 1140,
                    opacity: 1,
                    transform: "translate3d(0px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                >
                  <Image
                    alt=""
                    src="http://hotelnine.mn/media/hotelnine/content/pages/about/222.CR2.jpg"
                    width={1140}
                    height={390}
                    data-description=""
                  />
                </Link>
                <Link
                  href="http://hotelnine.mn/media/hotelnine/content/pages/about/333.JPG"
                  className="swiper-slide swiper-slide-active"
                  style={{
                    backgroundImage:
                      'url("http://hotelnine.mn/media/hotelnine/content/pages/about/333.JPG")',
                    width: 1140,
                    opacity: 1,
                    transform: "translate3d(-1140px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                >
                  <Image
                    alt=""
                    src="http://hotelnine.mn/media/hotelnine/content/pages/about/333.JPG"
                    data-description=""
                    width={1140}
                    height={500}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="container-sm">
            <div className="hidden-xs hidden-sm">
              <div className="vertical-book">
                <div className="row-sm">
                  <div className="col-sm-5-1">
                    <label>Chain</label>
                    <div className="arrow-form-field select">
                      <select fdprocessedid="4677pt">
                        <option>Ulaanbaatar</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-5-1">
                    <label>Check in</label>
                    <div className="arrow-form-field">
                      <input
                        type="text"
                        name=""
                        placeholder="2024/06/03"
                        className="datepicker hasDatepicker"
                        id="dp1717390552907"
                        fdprocessedid="4kn1xh"
                      />
                    </div>
                  </div>
                  <div className="col-sm-5-1">
                    <label>Check out</label>
                    <div className="arrow-form-field">
                      <input
                        type="text"
                        name=""
                        placeholder="2024/06/03"
                        className="datepicker hasDatepicker"
                        id="dp1717390552908"
                        fdprocessedid="vzswtm"
                      />
                    </div>
                  </div>
                  <div className="col-sm-5-1">
                    <div className="row-sm">
                      <div className="col-sm-6-small">
                        <label>Adult</label>
                        <div className="arrow-form-field select">
                          <select fdprocessedid="avha9u">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6-small">
                        <label>Room</label>
                        <div className="arrow-form-field select">
                          <select fdprocessedid="f32c08">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5-1">
                    <label className="ghost-element">Book</label>
                    <Link
                      href="/booking/"
                      className="btn btn-primary btn-lg-book btn-block"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="text-center">
                <h1>About Us</h1>
              </div>
              <p />
              <div
                id="content_gallery0"
                className="content_galleria"
                style={{ height: 500 }}
              >
                <Link href="http://hotelnine.mn/media/hotelnine/content/pages/about/222.CR2.jpg" />
                <Link href="http://hotelnine.mn/media/hotelnine/content/pages/about/333.JPG" />
              </div>
              <p />
              <div>
                The Modern Nomads Chain of restaurants has been delivering the
                nomadic taste and exceptional national Mongolian food to you
                since 2003, besides we have successfully established the first
                chain ofhotels in Mongolia.
              </div>
              <div>
                “Hotel Nine” aiming on becoming the first ever national chain of
                hotels has established its first 3 star hotel in January of 2012
                in Sukhbaatar soum of Selenge province, followed by the second
                hotel opening in September of 2012, in Tsogt-Tsetsii Soum of
                Umnugobi province, third hotel has opened in May of 2015,in
                Ulaanbaatar city.
              </div>
              <h2 style={{ textAlign: "center" }}>
                Enjoy your stay with us!
                <br />
              </h2>
            </div>
            <div className="parallax">
              <Link
                href=""
                className="bg__360"
                data-toggle="modal"
                data-target="#modal360"
              >
                <div className="text-center">
                  <h4>Virtual tour</h4>
                  <Image
                    alt=""
                    src="http://hotelnine.mn/static/sites/hotelnine/default/images/360_icon.png"
                    width={70}
                    height={70}
                  />
                </div>
              </Link>
            </div>
            <div className="about-contact">
              <div className="row">
                <div className="col-sm-2">
                  <h3>Contact</h3>
                </div>
                <div className="col-sm-5">
                  <p>
                    <span>
                      <i className="fa fa-map-marker" />
                    </span>
                    8 Amar street, Ulaanbaatar, Mongolia
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-envelope" />
                    </span>
                    <Link href="mailto:reservation@hotelnine.mn">
                      reservation@hotelnine.mn
                    </Link>
                  </p>
                </div>
                <div className="col-sm-5">
                  <p>
                    <span>
                      <i className="fa fa-print" />
                    </span>
                    (976) 11323847
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-phone" />
                    </span>
                    (976) 77114334, (976) 11330330
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

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

      {/* Modal */}
      <div
        className="modal fade"
        id="modal360"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">
                360 View
              </h4>
            </div>
            <div className="modal-body">
              <div>
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active">
                    <Link
                      href="#floor1"
                      aria-controls="floor1"
                      role="tab"
                      data-toggle="tab"
                    >
                      Floor 1
                    </Link>
                  </li>
                  <li role="presentation">
                    <Link
                      href="#floor2"
                      aria-controls="floor2"
                      role="tab"
                      data-toggle="tab"
                    >
                      Floor 2
                    </Link>
                  </li>
                  <li role="presentation">
                    <Link
                      href="#floor3"
                      aria-controls="floor3"
                      role="tab"
                      data-toggle="tab"
                    >
                      Floor 3
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="floor1">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2smn!4v1488429661746!6m8!1m7!1sDLEArS12KGgAAAQvO6VonQ!2m2!1d47.92046397924236!2d106.9219775264096!3f127.5517164865406!4f-15.168220683754626!5f0.7820865974627469"
                      width={840}
                      height={450}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </div>
                  <div role="tabpanel" className="tab-pane" id="floor2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2smn!4v1488430648153!6m8!1m7!1sbU4bYT5YVqkAAAQvO6B8Ow!2m2!1d47.92041664593497!2d106.9218140688929!3f218.91!4f-5.909999999999997!5f0.4000000000000002"
                      width={840}
                      height={450}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </div>
                  <div role="tabpanel" className="tab-pane" id="floor3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2smn!4v1488430681888!6m8!1m7!1sEKr7NmhmmR8AAAQvO6XClg!2m2!1d47.92043611860603!2d106.9215955578002!3f259.93!4f-4.219999999999999!5f0.4000000000000002"
                      width={840}
                      height={450}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
