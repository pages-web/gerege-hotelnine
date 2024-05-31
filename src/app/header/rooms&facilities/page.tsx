import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section>
        <div className="container">
          <div className="text-center">
            <div className="h9-page-header">
              <h1> Rooms &amp; Facilities</h1>
              <p>
                You are able to choose rooms in different of sizes, facilities
                and with windows overlooking to the street corner or inner yard
                etc. All rooms are fully equipped with Mini bar, Tea making
                corner, Wi Fi and Modern TV facility with varied range of
                channels.
              </p>
            </div>
          </div>
          <div>
            <div className="hidden-xs">
              <div className="vertical-book">
                <div className="row-sm">
                  <div className="col-sm-5-1">
                    <label>Chain</label>
                    <div className="arrow-form-field select">
                      <select
                      //   fdprocessedid="7rlmf"
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
                        id="dp1717076273923"
                        // fdprocessedid="xdw98c"
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
                        id="dp1717076273924"
                        // fdprocessedid="8c54tk"
                      />
                    </div>
                  </div>
                  <div className="col-sm-5-1">
                    <div className="row-sm">
                      <div className="col-sm-6-small">
                        <label>Adult</label>
                        <div className="arrow-form-field select">
                          <select
                          //   fdprocessedid="7j8gcv"
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
                          //   fdprocessedid="gfxvwe"
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
            </div>
            <div className="room-list">
              <div className="room-list-item">
                <div className="row">
                  <div className="col-sm-8 ">
                    <div className="right-spacer">
                      <Link
                        href="/header/rooms&facilities/business-suite-rooms"
                        className="hover-image"
                      >
                        <Image
                          alt="Business Suite Rooms"
                          src="http://hotelnine.mn/media/hotelnine/content/rooms/ub/business/.5743752250678220977_750_x_300.jpg"
                          width={750}
                          height={300}
                        />
                        <span>
                          <i className="fa fa-long-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="">
                      <h2>
                        <Link href="/header/rooms&facilities/business-suite-rooms">
                          Business Suite Rooms
                        </Link>
                      </h2>
                      <h3>Rooms &amp; Facilities</h3>
                      <p>An earthy elegance epitomises our</p>
                      <p>Classic room.</p>
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
              </div>
              <div className="room-list-item">
                <div className="row">
                  <div className="col-sm-8 pull-right">
                    <div className="left-spacer">
                      <Link
                        href="/header/rooms&facilities/suite-rooms"
                        className="hover-image"
                      >
                        <Image
                          alt="Suite Rooms"
                          src="http://hotelnine.mn/media/hotelnine/content/rooms/ub/suite/.4322902171187534721_750_x_300.jpg"
                          width={750}
                          height={300}
                        />
                        <span>
                          <i className="fa fa-long-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="">
                      <h2>
                        <Link href="/header/rooms&facilities/suite-rooms">
                          Suite Rooms
                        </Link>
                      </h2>
                      <h3>Rooms &amp; Facilities</h3>
                      <p>An earthy elegance epitomises our</p>
                      <p>Classic room.</p>
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
              </div>
              <div className="room-list-item">
                <div className="row">
                  <div className="col-sm-8 ">
                    <div className="right-spacer">
                      <Link
                        href="/header/rooms&facilities/standard-rooms/"
                        className="hover-image"
                      >
                        <Image
                          alt="Standard Rooms"
                          src="http://hotelnine.mn/media/hotelnine/content/rooms/ub/.-7156350958280280742_750_x_300.JPG"
                          width={750}
                          height={300}
                        />
                        <span>
                          <i className="fa fa-long-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="">
                      <h2>
                        <Link href="/header/rooms&facilities/standard-rooms/">
                          Standard Rooms
                        </Link>
                      </h2>
                      <h3>Rooms &amp; Facilities</h3>
                      <p>An earthy elegance epitomises our</p>
                      <p>Classic room.</p>
                      <div className="info-boxes">
                        <div className="info-box">
                          <div>
                            <i className="fa fa-arrows-alt" />
                            <h4>18</h4>
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
                            <h4>85$</h4>
                            Price
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
