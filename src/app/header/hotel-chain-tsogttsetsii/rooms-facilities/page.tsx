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
              <h1>Rooms &amp; Facilities</h1>
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
                      //   fdprocessedid="v73idg"
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
                        id="dp1717086667279"
                        // fdprocessedid="5e5m0e"
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
                        id="dp1717086667280"
                        // fdprocessedid="3ltj9"
                      />
                    </div>
                  </div>
                  <div className="col-sm-5-1">
                    <div className="row-sm">
                      <div className="col-sm-6-small">
                        <label>Adult</label>
                        <div className="arrow-form-field select">
                          <select
                          //   fdprocessedid="i7s6cy"
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
                          //   fdprocessedid="apzjx7"
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
                        href="/header/hotel-chain-tsogttsetsii/rooms-facilities/excutive-suite"
                        className="hover-image"
                      >
                        <Image
                          alt="Excutive suite"
                          src="http://hotelnine.mn/media/hotelnine/content/rooms/tsogt/.-1378357345295356613_750_x_300.jpg"
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
                        <Link href="/excutive-suite/">Excutive suite</Link>
                      </h2>
                      <h3>Rooms &amp; Facilities</h3>
                      <p>An earthy elegance epitomises our</p>
                      <p>Classic room.</p>
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
              </div>
              <div className="room-list-item">
                <div className="row">
                  <div className="col-sm-8 pull-right">
                    <div className="left-spacer">
                      <Link href="/suite/" className="hover-image">
                        <Image
                          alt="Suite"
                          src="http://hotelnine.mn/media/hotelnine/content/rooms/tsogt/.4859451082772744240_750_x_300.JPG"
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
                        <Link href="/suite/">Suite</Link>
                      </h2>
                      <h3>Rooms &amp; Facilities</h3>
                      <p>An earthy elegance epitomises our</p>
                      <p>Classic room.</p>
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
                            <h4>130$</h4>
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
                      <Link href="/lux/" className="hover-image">
                        <Image
                          alt="Lux"
                          src="http://hotelnine.mn/media/hotelnine/content/rooms/tsogt/.-4526757844484056771_750_x_300.JPG"
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
                        <Link href="/lux/">Lux</Link>
                      </h2>
                      <h3>Rooms &amp; Facilities</h3>
                      <p>An earthy elegance epitomises our</p>
                      <p>Classic room.</p>
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
                            <h4>106$</h4>
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
                      <Link href="/standart-double/" className="hover-image">
                        <Image
                          alt="Standart double"
                          src="http://hotelnine.mn/media/hotelnine/content/rooms/tsogt/.1235989294903348822_750_x_300.jpg"
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
                        <Link href="/standart-double/">Standart double</Link>
                      </h2>
                      <h3>Rooms &amp; Facilities</h3>
                      <p>An earthy elegance epitomises our</p>
                      <p>Classic room.</p>
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
                            <h4>65$</h4>
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
                      <Link href="/standart-twin/" className="hover-image">
                        <Image
                          alt="Standart twin"
                          src="http://hotelnine.mn/media/hotelnine/content/rooms/tsogt/.1235989294903348822_750_x_300.jpg"
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
                        <Link href="/standart-twin/">Standart twin</Link>
                      </h2>
                      <h3>Rooms &amp; Facilities</h3>
                      <p>An earthy elegance epitomises our</p>
                      <p>Classic room.</p>
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
                            <h4>45$</h4>
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
