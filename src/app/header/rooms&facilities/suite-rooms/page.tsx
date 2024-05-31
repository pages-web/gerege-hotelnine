import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container">
        <article className="room">
          <div className="slider">
            <div className="swiper-container-room swiper-container-horizontal swiper-container-fade">
              <div
                id="content_gallery"
                className="swiper-wrapper"
                style={{ transitionDuration: "2000ms" }}
              >
                <Link
                  href="http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/_MG_0138.jpg"
                  className="swiper-slide swiper-slide-prev"
                  style={{
                    backgroundImage:
                      'url("http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/_MG_0138.jpg")',
                    width: 1140,
                    opacity: 1,
                    transform: "translate3d(0px, 0px, 0px)",
                    transitionDuration: "2000ms",
                  }}
                >
                  <Image
                    alt=""
                    src="http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/_MG_0138.jpg"
                    width={1200}
                    height={800}
                    data-description=""
                  />
                </Link>
                <Link
                  href="http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/_MG_0205.jpg"
                  className="swiper-slide swiper-slide-active"
                  style={{
                    backgroundImage:
                      'url("http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/_MG_0205.jpg")',
                    width: 1140,
                    opacity: 1,
                    transform: "translate3d(-1140px, 0px, 0px)",
                    transitionDuration: "2000ms",
                  }}
                >
                  <Image
                    alt=""
                    src="http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/_MG_0205.jpg"
                    data-description=""
                    width={1200}
                    height={800}
                  />
                </Link>
                <Link
                  href="http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/_MG_0205.jpg"
                  className="swiper-slide swiper-slide-next"
                  style={{
                    backgroundImage:
                      'url("http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/_MG_0205.jpg")',
                    width: 1140,
                    opacity: 0,
                    transform: "translate3d(-2280px, 0px, 0px)",
                    transitionDuration: "2000ms",
                  }}
                >
                  <Image
                    alt=""
                    src="http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/_MG_0205.jpg"
                    data-description=""
                    width={1200}
                    height={800}
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
                    //   fdprocessedid="padoz"
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
                      placeholder="2024/05/30"
                      className="datepicker hasDatepicker"
                      id="dp1717076273925"
                      //   fdprocessedid="514amg"
                    />
                  </div>
                </div>
                <div className="col-sm-5-1">
                  <label>Check out</label>
                  <div className="arrow-form-field">
                    <input
                      type="text"
                      name=""
                      placeholder="2024/05/30"
                      className="datepicker hasDatepicker"
                      id="dp1717076273926"
                      //   fdprocessedid="bgjgle"
                    />
                  </div>
                </div>
                <div className="col-sm-5-1">
                  <div className="row-sm">
                    <div className="col-sm-6-small">
                      <label>Adult</label>
                      <div className="arrow-form-field select">
                        <select
                        //   fdprocessedid="4fixas"
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
                        //   fdprocessedid="i9whpj"
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
              <h1>Suite Rooms</h1>
            </div>
            <div className="room-content text-center">
              <p />
              <figure>
                <div
                  id="content_gallery0"
                  className="content_galleria"
                  style={{ height: 500 }}
                >
                  <Link href="http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/_MG_0138.jpg" />
                  <Link href="http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/_MG_0205.jpg" />
                  <Link href="http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/_MG_0205.jpg" />
                </div>
              </figure>
              <p />
              <p />
              <p>
                Suite rooms are more comfortable with relaxing area. The bedroom
                is discreetly separated from the living area and the marble
                bathroom additional studio area. Enjoy comforts while away from
                home with these satisfying suites.
              </p>
            </div>
            <div className="clearfix" />
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <div className="text-center">
                  <div className="price">
                    <h4>Price per night</h4>
                    <div className="pricebox">
                      <h3 className="first">mnt 380,000</h3>
                      <h5>Double</h5>
                    </div>
                    <div className="pricebox">
                      <h3>mnt 425,000</h3>
                      <h5>Twin</h5>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="info-boxes">
                    <div className="info-box">
                      <div>
                        <i className="fa fa-arrows-alt" />
                        <h4>25-40</h4>
                        Size{" "}
                        <span className="m2">
                          m<i>2</i>
                        </span>
                      </div>
                    </div>
                    <div className="info-box">
                      <div>
                        <i className="fa fa-users" />
                        <h4>1</h4>
                        Guests
                      </div>
                    </div>
                    <div className="info-box">
                      <div>
                        <i className="fa fa-bed" />
                        <h4>1</h4>
                        Bedroom
                      </div>
                    </div>
                    <div className="info-box">
                      <div>
                        <i className="fa fa-google-wallet" />
                        <h4>112$</h4>
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
                    <span>Individual climate control</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span>In-room electronic safe</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span>Iron/ironing board</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span>IDD telephones</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span>Workspace/Desk</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span>Tea area</span>
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
