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
              <div id="content_gallery" className="swiper-wrapper">
                <Link
                  href="http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/DSM_4935.jpg"
                  className="swiper-slide swiper-slide-active"
                  style={{
                    backgroundImage:
                      'url("http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/DSM_4935.jpg")',
                    width: 1140,
                    opacity: 1,
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <Image
                    alt=""
                    src="http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/DSM_4935.jpg"
                    data-description=""
                    width={1024}
                    height={768}
                  />
                </Link>
                <Link
                  href="http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/DSM_4942.jpg"
                  className="swiper-slide swiper-slide-next"
                  style={{
                    backgroundImage:
                      'url("http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/DSM_4942.jpg")',
                    width: 1140,
                    opacity: 0,
                    transform: "translate3d(-1140px, 0px, 0px)",
                  }}
                >
                  <Image
                    alt=""
                    src="http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/DSM_4942.jpg"
                    data-description=""
                    width={1200}
                    height={800}
                  />
                </Link>
                <Link
                  href="http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/DSM_4944.jpg"
                  className="swiper-slide"
                  style={{
                    backgroundImage:
                      'url("http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/DSM_4944.jpg")',
                    width: 1140,
                    opacity: 0,
                    transform: "translate3d(-2280px, 0px, 0px)",
                  }}
                >
                  <Image
                    alt=""
                    src="http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/DSM_4944.jpg"
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
                    //   fdprocessedid="e3cma"
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
                      id="dp1717076273933"
                      //   fdprocessedid="ucfzpv"
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
                      id="dp1717076273934"
                      //   fdprocessedid="ec3g"
                    />
                  </div>
                </div>
                <div className="col-sm-5-1">
                  <div className="row-sm">
                    <div className="col-sm-6-small">
                      <label>Adult</label>
                      <div className="arrow-form-field select">
                        <select
                        //   fdprocessedid="2ovrb"
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
                        //   fdprocessedid="ylemdb"
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
                    href="/booking/"
                    className="btn btn-primary btn-lg-book btn-block"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h1>Business Suite Rooms</h1>
            </div>
            <div className="room-content text-center">
              <p />
              <figure>
                <div
                  id="content_gallery0"
                  className="content_galleria"
                  style={{ height: 500 }}
                >
                  <Link href="http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/DSM_4935.jpg" />
                  <Link href="http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/DSM_4942.jpg" />
                  <Link href="http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/DSM_4944.jpg" />
                </div>
              </figure>
              <p />
              <p />
              <div>
                Enjoy a home away from home at the spacious H9- UB Ideal for
                business executives travelling on their own or with their
                families, the H9- UB offers a cosy accommodation with hotel
                amenities as well as broadband Internet access and a
                well-stocked kitchenette and guest room.
              </div>
              <div>
                Choose from a 67.5 square metres two-bedroom or 68.6 square
                metres two-bedroom , where each is equipped with its own
                adjoining bathroom.
                <br />
              </div>
            </div>
            <div className="clearfix" />
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <div className="text-center">
                  <div className="price">
                    <h4>Price per night</h4>
                    <div className="pricebox">
                      <h3>mnt 630,000</h3>
                      <h5>Upto 4</h5>
                    </div>
                  </div>
                  <div className="info-boxes">
                    <div className="info-box">
                      <div>
                        <i className="fa fa-arrows-alt" />
                        <h4>67-69</h4>
                        Size{" "}
                        <span className="m2">
                          m<i>2</i>
                        </span>
                      </div>
                    </div>
                    <div className="info-box">
                      <div>
                        <i className="fa fa-users" />
                        <h4>4</h4>
                        Guests
                      </div>
                    </div>
                    <div className="info-box">
                      <div>
                        <i className="fa fa-bed" />
                        <h4>2</h4>
                        Bedroom
                      </div>
                    </div>
                    <div className="info-box">
                      <div>
                        <i className="fa fa-google-wallet" />
                        <h4>186$</h4>
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
                <div className="col-sm-4">
                  <div className="feature">
                    <i className="fa fa-check-square-o" />
                    <span>Meeting desk</span>
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
      {/* <section className="gray">
        <div className="container">
          <div className="container-sm">
            <div className="promotions">
              <div className="text-center">
                <h2>Promotions</h2>
                <span className="header-border"></span>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <Link
                    href="/book-and-choose-our-hotel22/"
                    className="hover-image"
                  >
                    <Image src="http://hotelnine.mn/media/hotelnine/content/sample-images/promo.jpg" />
                    <span>
                      <i className="fa fa-gift"></i>
                    </span>
                  </Link>
                  <h4>
                    <Link href="/book-and-choose-our-hotel22/">
                      Book and choose our hotel!
                    </Link>
                  </h4>
                </div>

                <div className="col-sm-4">
                  <Link
                    href="/book-and-choose-our-hotel2/"
                    className="hover-image"
                  >
                    <Image src="http://hotelnine.mn/media/hotelnine/content/sample-images/promo.jpg" />
                    <span>
                      <i className="fa fa-gift"></i>
                    </span>
                  </Link>
                  <h4>
                    <Link href="/book-and-choose-our-hotel2/">
                      Book and choose our hotel!
                    </Link>
                  </h4>
                </div>

                <div className="col-sm-4">
                  <Link
                    href="/book-and-choose-our-hotel/"
                    className="hover-image"
                  >
                    <Image src="http://hotelnine.mn/media/hotelnine/content/sample-images/promo.jpg" />
                    <span>
                      <i className="fa fa-gift"></i>
                    </span>
                  </Link>
                  <h4>
                    <Link href="/book-and-choose-our-hotel/">
                      Book and choose our hotel!
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
