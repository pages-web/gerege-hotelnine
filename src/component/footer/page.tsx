import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h2>Current weather</h2>

              <h4>Ulaanbaatar, Mongolia</h4>
              <div id="weather"></div>
            </div>
            <div className="col-sm-4">
              <h2>Connect with us</h2>
              <h4>Social media Channels</h4>
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
                  href="https://www.youtube.com/user/nomadsgroup"
                  target="_blank"
                  className="youtube"
                >
                  <i className="fa fa-youtube"></i>
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
                    alt="Booking.com"
                    src="http://hotelnine.mn/static/sites/hotelnine/default/images/booking_com.png"
                    width={78}
                    height={13}
                  />
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <h2>Newsletter sign up</h2>
              <h4>Sign Up For Special Offers</h4>
              <div className="subscribe-form">
                <input
                  type="mail"
                  name="email"
                  placeholder="Enter your email"
                  // fdprocessedid="64knyc"
                />
                <button
                // fdprocessedid="v1z69u"
                >
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="threeword">
                <Link
                  href="http://w3w.co/bands.outcasts.holiday"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src="http://what3words.com/calls/embed/text/bands.outcasts.holiday/dark"
                    layout="responsive"
                    width={200}
                    height={20}
                  />
                </Link>
              </div>
              <ul>
                <li>
                  <i className="fa fa-map-marker"></i>8 Amar street,
                  Ulaanbaatar, Mongolia
                </li>
                <li>
                  <i className="fa fa-phone"></i>(976) 77114334, (976) 11330330
                </li>
                <li>
                  <i className="fa fa-print"></i>(976) 11323847
                </li>
                <li>
                  <Link href="mailto:reservation@hotelnine.mn">
                    <i className="fa fa-envelope"></i>reservation@hotelnine.mn
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 hidden-xs">
              <div className="text-center footer-logo">
                <Image
                  alt=""
                  src="http://hotelnine.mn/static/sites/hotelnine/default/images/logo_white.png"
                  width={200}
                  height={100}
                />
              </div>
              <div className="footer_menutxt">
                <Link href="/about">About us</Link>

                <Link href="/photo-gallery/">Photo gallery</Link>

                <Link href="/reviews/">Reviews</Link>

                <Link href="/contact-us/">Contact us</Link>
              </div>
            </div>
            <div className="col-sm-4 text-right-footer">
              <div className="privacy-menu hidden-xs">
                <Link href="#">Privacy Policy </Link>

                <Link href="#">Terms of Use</Link>

                <Link href="#">Site Map</Link>
              </div>
              © 2024 Hearst Communications, Inc.
              <br />
              All Rights Reserved.
              <div className="gerege">
                <div className="gerege-agency">
                  <div className="gerege-info">
                    <span className="gerege-icon-code"></span>
                    by
                  </div>
                  <Link href="http://gerege.agency/" target="_blank">
                    <span className="gerege-icon-char-g"></span>
                    <span className="gerege-icon-char-e"></span>
                    <span className="gerege-icon-char-r"></span>
                    <span className="gerege-icon-char-e"></span>
                    <span className="gerege-icon-char-g"></span>
                    <span className="gerege-icon-char-e"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
