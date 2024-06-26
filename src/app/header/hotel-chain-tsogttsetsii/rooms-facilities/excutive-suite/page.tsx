import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container">
        <article className="room">
          <div className="slider">
            <div className="swiper-container-room swiper-container-horizontal swiper-container-fade">
              <div id="content_gallery" className="swiper-wrapper">
                <Link
                  href="http://hotelnine.mn/media/hotelnine/content/rooms/tsogt/Excutive-suite-1.jpg"
                  className="swiper-slide swiper-slide-active"
                  style={{
                    backgroundImage: "url(/image/Excutive-suite-1.png)",
                    width: 1140,
                    opacity: 1,
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <Image
                    alt=""
                    src="/image/Excutive-suite-1.png"
                    width={800}
                    height={600}
                    data-description=""
                  />
                </Link>
                <Link
                  href="http://hotelnine.mn/media/hotelnine/content/rooms/tsogt/Excutive-suite.jpg"
                  className="swiper-slide swiper-slide-next"
                  style={{
                    backgroundImage: "url(/image/Excutive-suite.png)",
                    width: 1140,
                    opacity: 0,
                    transform: "translate3d(-1140px, 0px, 0px)",
                  }}
                >
                  <Image
                    alt=""
                    src="/image/Excutive-suite.png"
                    width={1200}
                    height={800}
                    data-description=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="container-sm">
            <div className="vertical-book">
              <div className="row-sm">
                <div className="col-sm-5-1">
                  <label>Chain</label>
                  <div className="arrow-form-field select">
                    <select
                    //   fdprocessedid="qw7zmr"
                    >
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
                      placeholder="2024/05/31"
                      className="datepicker hasDatepicker"
                      id="dp1717086667287"
                      //   fdprocessedid="p8a1x"
                    />
                  </div>
                </div>
                <div className="col-sm-5-1">
                  <label>Check out</label>
                  <div className="arrow-form-field">
                    <input
                      type="text"
                      name=""
                      placeholder="2024/05/31"
                      className="datepicker hasDatepicker"
                      id="dp1717086667288"
                      //   fdprocessedid="5d2su"
                    />
                  </div>
                </div>
                <div className="col-sm-5-1">
                  <div className="row-sm">
                    <div className="col-sm-6-small">
                      <label>Adult</label>
                      <div className="arrow-form-field select">
                        <select
                        //   fdprocessedid="z491z"
                        >
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
                        <select
                        //   fdprocessedid="k7qhtu"
                        >
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
                    href="/header/booking"
                    className="btn btn-primary btn-lg-book btn-block"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h1>Excutive suite</h1>
            </div>
            <div className="room-content text-center">
              <p />
              <div
                id="content_gallery0"
                className="content_galleria"
                style={{ height: 500 }}
              >
                <Link href="/image/Excutive-suite-1.png" />
                <Link href="/image/Excutive-suite.png" />
              </div>
              <p />
            </div>
            <div className="clearfix" />
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <div className="text-center">
                  <div className="price">
                    <h4>Price per night</h4>
                    <div className="pricebox">
                      <h3 className="first">mnt 500,000</h3>
                      <h5 />
                    </div>
                    <div className="pricebox">
                      <h3>mnt </h3>
                      <h5 />
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="info-boxes">
                    <div className="info-box">
                      <div>
                        <i className="fa fa-arrows-alt" />
                        <h4 />
                        Size{" "}
                        <span className="m2">
                          m<i>2</i>
                        </span>
                      </div>
                    </div>
                    <div className="info-box">
                      <div>
                        <i className="fa fa-users" />
                        <h4 />
                        Guests
                      </div>
                    </div>
                    <div className="info-box">
                      <div>
                        <i className="fa fa-bed" />
                        <h4 />
                        Bedroom
                      </div>
                    </div>
                    <div className="info-box">
                      <div>
                        <i className="fa fa-google-wallet" />
                        <h4>205$</h4>
                        Price
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="features">
              <h2>Room features</h2>
              <div className="row">
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span />
                  </div>
                </div>
              </div>
            </div>
            <div className="features">
              <h2>All room features</h2>
              <div className="row">
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span>Complimentary mineral water</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span> Tea maker</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span> Fully stocked mini bar</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span> 10am-10pm room dining</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span> Laundry service</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span> Wake up call service available</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span> Free Wi-Fi</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span> 40 inch LCD tv</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span> Hair Dryer</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span> Soundproofing window</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span> Electric kettle.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
