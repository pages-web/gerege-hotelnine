"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((previousState) => !previousState);
  };
  // const MobileHeader = () => {
  //   // Event handler for initURL, replace with actual functionality
  //   const mobileInitURL = () => {
  //     console.log('initURL called');
  //   };
  // }
  // const NewBody = () => {
  //   const newBodyInitURL = () => {
  //     console.log("initURL called");
  //   };
  // };

  return (
    <div className="menu fixed-text fixed-menu">
      <div className="top-bar hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="header_menu"></div>
            </div>
            <div className="col-sm-4 head_social">
              <div className="social-links">
                <Link
                  href="https://www.facebook.com/hotelnine.mn/"
                  target="_blank"
                  className="facebook"
                >
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link
                  href="https://twitter.com/nomadsgroup"
                  target="_blank"
                  className="twitter"
                >
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link
                  href="https://www.expedia.com/Ulaanbaatar-Hotels-Hotel-Nine.h17731026.Hotel-Information?chkin=10%2F16%2F2018&amp;chkout=10%2F17%2F2018&amp;rm1=a2&amp;hwrqCacheKey=08306feb-6781-4512-9eeb-03e6381776a4HWRQ1539652188590&amp;cancellable=false&amp;regionId=3632&amp;vip=false&amp;c=79d005aa-138e-4e3d-8550-3e2d42c8e6a0&amp;&amp;exp_dp=75.65&amp;exp_ts=1539652189784&amp;exp_curr=USD&amp;swpToggleOn=false&amp;exp_pg=HSR"
                  target="_blank"
                  className="youtube"
                >
                  <Image
                    src="http://hotelnine.mn/static/sites/hotelnine/default/images/ex.svg"
                    alt="Expedia"
                    width={16}
                    height={16}
                  />
                </Link>
                <Link
                  href="https://www.tripadvisor.com/Hotel_Review-g293956-d8111045-Reviews-Hotel_Nine-Ulaanbaatar.html"
                  target="_blank"
                  className="tripadvisor"
                >
                  <i className="fa fa-tripadvisor"></i>
                </Link>
                <Link
                  href="http://www.booking.com/hotel/mn/h9-nine-ulaanbaatar-ulaanbaatar2.html?aid=378266;label=bdot-g5ci8Q%2AvJjjaTJJMfllk4QS160851574018%3Apl%3Ata%3Ap1%3Ap21%2C093%2C000%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-146342138710%3Akwd-334108049%3Alp1010217%3Ali%3Adec%3Adm;sid=63c3f7e0ed770714ea916c004054b353;all_sr_blocks=138028602_88119498_1_1_0;checkin=2017-03-10;checkout=2017-03-11;dest_id=-2353539;dest_type=city;dist=0;group_adults=1;group_children=0;highlighted_blocks=138028602_88119498_1_1_0;hpos=21;no_rooms=1;room1=A;sb_price_type=total;srfid=92a4ea539106aff2c429604598ac70e84f6f0806X21;type=total;ucfs=1&amp;"
                  target="_blank"
                  className="booking_com"
                >
                  <Image
                    src="http://hotelnine.mn/static/sites/hotelnine/default/images/booking_com.png"
                    alt="Booking.com"
                    width={91}
                    height={15}
                  />
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="top-right-bar">
                <div className="dropdown inline-block lg-icon">
                  <Link
                    href=""
                    id="languages"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Image
                      className="usa"
                      src="http://hotelnine.mn/static/sites/hotelnine/default/images/usa.png"
                      alt="USA"
                      width={16}
                      height={16}
                    />
                    English
                    <span className="caret"></span>
                  </Link>
                  <ul
                    className="dropdown-menu lg-icon"
                    aria-labelledby="languages"
                    id="langbar"
                  >
                    <li>
                      <Link href="javascript:;" rel="en" className="lang">
                        <Image
                          className="usa"
                          src="http://hotelnine.mn/static/sites/hotelnine/default/images/usa.png"
                          alt="USA"
                          width={16}
                          height={16}
                        />
                        English
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:;" rel="mn" className="lang">
                        <Image
                          className="usa"
                          src="http://hotelnine.mn/static/sites/hotelnine/default/images/usa.png"
                          alt="Mongolia"
                          width={16}
                          height={16}
                        />
                        Mongolia
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-header visible-xs visible-sm">
        <div className="container">
          <div className="text-center">
            <div className="rel">
              <button
                className="btn btn-primary pull-left"
                id="mobile-menu"
                // onClick={handleClick}
                onClick={() => setClicked(!clicked)}
              >
                <i className="fa fa-navicon"></i>
              </button>

              <Link href="/" className="logo">
                <Image
                  src="http://hotelnine.mn/static/sites/hotelnine/default/images/logo_un.png"
                  alt="Hotel Nine"
                  width={400}
                  height={100}
                />
              </Link>

              <div className="dropdown inline-block">
                <Link
                  href=""
                  id="hoteldrop"
                  className="original"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Ulaanbaatar chain
                  <span className="caret"></span>
                </Link>
                <Link
                  href=""
                  id="hoteldrop"
                  style={{ display: "none" }}
                  className="cloned"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hotel nine chain
                  <span className="caret"></span>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="hoteldrop">
                  <li>
                    <Link
                      href="/?h5=dd" // onClick={MobileHeader}
                      className="noajax hotel-thumb nub"
                    >
                      Ulaanbaatar Chain
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/header/hotel-chain-tsogttsetsii"
                      className="noajax hotel-thumb"
                    >
                      Tsogt tsegtsii Chain
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {clicked ? (
          <div
            className="mobile-menu visible-xs visible-sm "
            style={{
              background: "rgb(235,25,51)",
              width: "250px",
              position: "fixed",
              top: "0",
              left: "0",
              height: "100%",
              backgroundColor: "#111",
              paddingTop: "20px",
              transition: "0.3s",
              zIndex: 1,
            }}
          >
            <div
              className="close-btn text-right"
              id="close-btn"
              onClick={() => setClicked(!clicked)}
            >
              <i className="fa fa-remove" /> Close
            </div>
            <div className="main-menu">
              <Link href="/" target="_blank">
                Home
              </Link>
              <Link href="/header/rooms&facilities">
                {" "}
                Rooms &amp; Facilities
              </Link>
              <Link href="/header/service">Services</Link>
              <Link href="/header/special-offers"> Special offer </Link>
              <Link href="/header/neer-the-hotel">Near the hotel</Link>
              <Link href="/about">About us</Link>
              <Link href="/photo-gallery/">Photo gallery</Link>
              <Link href="/reviews/">Reviews</Link>
              <Link href="/contact-us/">Contact us</Link>
            </div>
            <div className="text-center">
              <h3>Choose language</h3>
              <div className="languages">
                <Link href="#">En</Link>
                <Link href="#">Mn</Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div
        className="new_body"
        style={{
          backgroundImage:
            'url("http://hotelnine.mn/static/sites/hotelnine/default/images/hee1.png")',
          backgroundRepeat: "repeat-x",
        }}
      >
        <div className="menu hidden-xs hidden-sm">
          <div className="container">
            <div className="rel">
              <Link href="/" className="logo">
                <Image
                  className="original-logo"
                  src="http://hotelnine.mn/static/sites/hotelnine/default/images/logo.png"
                  alt="Hotel Nine"
                  width={400}
                  height={100}
                />
                <Image
                  className="fixed-logo"
                  src="http://hotelnine.mn/static/sites/hotelnine/default/images/logo-fixed.jpg"
                  alt="Hotel Nine"
                  width={200}
                  height={100}
                />
              </Link>
              <div
                className="pull-right"
                style={{ height: "100px", background: "#fff" }}
              >
                <div className="menu-container">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/header/rooms&facilities">
                        Rooms &amp; Facilities
                      </Link>
                    </li>
                    <li>
                      <Link href="/header/service">Services</Link>
                    </li>
                    <li>
                      <Link href="/header/special-offers">Special offer</Link>
                    </li>
                    <li>
                      <Link href="/header/neer-the-hotel">Near the hotel</Link>
                    </li>
                    <div className="dropdown inline-block testerr">
                      <Link
                        href=""
                        id="hoteldrop"
                        className="original"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ulaanbaatar chain
                        <span className="caret"></span>
                      </Link>
                      <Link
                        href=""
                        id="hoteldrop"
                        style={{ display: "none" }}
                        className="cloned"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Hotel nine chain
                        <span className="caret"></span>
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="hoteldrop">
                        <li>
                          <Link
                            href="/?h5=dd"
                            // onClick={newBodyInitURL}
                            className="noajax hotel-thumb nub"
                          >
                            Ulaanbaatar Chain
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/header/hotel-chain-tsogttsetsii"
                            className="noajax hotel-thumb"
                          >
                            Tsogt tsegtsii Chain
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
