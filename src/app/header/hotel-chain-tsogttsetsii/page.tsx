import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div id="content">
      <div className="home-slider">
        <div className="swiper-container fullheight swiper-container-horizontal swiper-container-fade">
          <div
            className="swiper-wrapper fullheight"
            style={{ transitionDuration: "0ms" }}
          >
            <div
              className="swiper-slide fullheight swiper-slide-active"
              style={{
                backgroundImage:
                  'url("http://hotelnine.mn/media/hotelnine/content/Home-slider/.-1966015296012080876_1920_x_1280.jpg")',
                backgroundPositionY: "50%",
                width: 1519,
                opacity: 1,
                transform: "translate3d(0px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            >
              <div className="container fullheight">
                <div className="rel fullheight faderight">
                  <div className="caption">
                    <h2 style={{ visibility: "visible" }} className="">
                      Hotel Nine Tsogt-Tsetsii{" "}
                    </h2>
                    <p></p>
                    <h6>
                      <Link href="/news/">Read more</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide fullheight swiper-slide-next"
              style={{
                backgroundImage:
                  'url("http://hotelnine.mn/media/hotelnine/content/Home-slider/.-1966015296012080876_1920_x_1280.jpg")',
                backgroundPositionY: "0%",
                width: 1519,
                opacity: 0,
                transform: "translate3d(-1519px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            >
              <div className="container fullheight">
                <div className="rel fullheight faderight">
                  <div className="caption">
                    <h2 style={{ visibility: "visible" }} className="">
                      Hotel Nine Tsogt Tsegtsii
                    </h2>
                    <p></p>
                    <h6>
                      <Link href="/news/">Read more</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
            style={{ left: "189.5px" }}
          >
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
            <span className="swiper-pagination-bullet" />
          </div>
        </div>
        <div className="home-book-container-outer">
          <div className="container">
            <div className="home-book-container hidden-xs hidden-sm">
              <div className="row">
                <div className="col-sm-4 col-sm-offset-8">
                  <form>
                    <div className="row">
                      <div className="col-sm-12">
                        <label>Chain</label>
                        <div className="arrow-form-field select">
                          <select
                          //   fdprocessedid="sjqmym"
                          >
                            <option>Ulaanbaatar</option>
                            <option>Sukhbaatar</option>
                            <option>Tsogt Tsegtsii</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <Link
                          className="btn btn-primary btn-lg-book btn-block"
                          href="/header/hotel-chain-tsogttsetsii/booking-tsogttsetsii"
                        >
                          Book
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container about">
        <div className="home-about">
          <div className="text-center">
            <Image
              alt=""
              src="http://hotelnine.mn/static/sites/hotelnine/default/images/logo_un.png"
              width={168}
              height={76}
              className="hidden-xs"
            />
            <h2>Hotel Nine Tsogt Tsegtsii</h2>
          </div>
          <p>
            “Hotel Nine” aiming on becoming the first ever national chain of
            hotels has established its second 3 star hotel in September of 2012,
            in Tsogt-Tsetsii Soum of Umnugobi province.
          </p>
          <p>
            <span
              className="redactor-invisible-space"
              data-redactor-class="redactor-invisible-space"
            >
              Our 3-star “Hotel Nine Tsogt-Tsetsii” features 26 standard rooms,
              9 deluxe rooms and 2 lux rooms, as well as we offer you a
              conference hall which includes 150-200 persons, meeting room which
              holds between 12-20 individuals, Live music disco bar, pool
              billiard, sauna, swimming pool and jakuzi.
              <br />
            </span>
          </p>
          <p>
            <span className="redactor-invisible-space">
              <span
                className="redactor-invisible-space"
                data-redactor-class="redactor-invisible-space"
              >
                Hotel Nine Tsogt Tsetsii is ideal for corporate business
                travelers and backpacker tourists who visits to Mining center,
                Umnugobi provice.
                <br />
              </span>
            </span>
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>We look forward to welcoming you.</strong>
            <span className="redactor-invisible-space">
              <span
                className="redactor-invisible-space"
                data-redactor-class="redactor-invisible-space"
              />
            </span>
          </p>
          <p style={{ textAlign: "center" }} rel="text-align: center;">
            Feel the comfort and excitement of the Hotel Nine.
          </p>
        </div>
        <div className="intro">
          <Link href="/" className="hotel-thumb">
            <div className="thumb-image">
              <Image
                alt=""
                src="http://hotelnine.mn/media/hotelnine/content/Menu/hotel-menus/.-4606271830379144488_433_x_500.jpg"
                width={433}
                height={500}
              />
            </div>
            <div className="caption">
              <span>Ulaanbaatar</span>
              <p>Chain</p>
            </div>
          </Link>
          <Link href="/header/hotel-chain-tsogttsetsii" className="hotel-thumb">
            <div className="thumb-image">
              <Image
                alt=""
                src="http://hotelnine.mn/media/hotelnine/content/Menu/hotel-menus/.-7425877568319427081_750_x_500.png"
                width={750}
                height={500}
              />
            </div>
            <div className="caption">
              <span>Tsogt tsegtsii</span>
              <p>Chain</p>
            </div>
          </Link>
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
