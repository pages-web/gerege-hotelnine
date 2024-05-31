import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container service">
        <h1 className="simple-header">Special offers</h1>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 ">
              <Link
                className="service-thumb"
                href="/header/special-offers/early-reservation"
                style={{
                  backgroundImage:
                    'url("http://hotelnine.mn/media/hotelnine/content/offers/.9020877505510124683_800_x_400.JPG")',
                }}
              />
            </div>
            <div className="col-sm-4">
              <Link
                href="/header/special-offers/early-reservation"
                className="service-title"
                style={{ height: 300 }}
              >
                <h4>Early Reservation</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 pull-right">
              <Link
                className="service-thumb"
                href="/header/special-offers/happy-couple"
                style={{
                  backgroundImage:
                    'url("http://hotelnine.mn/media/hotelnine/content/offers/.-7425883568329427110_800_x_400.jpg")',
                }}
              />
            </div>
            <div className="col-sm-4">
              <Link
                href="/header/special-offers/happy-couple"
                className="service-title"
                style={{ height: 300 }}
              >
                <h4>Happy Couple</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 ">
              <Link
                className="service-thumb"
                href="/header/special-offers/fall-discount-10"
                style={{
                  backgroundImage:
                    'url("http://hotelnine.mn/media/hotelnine/content/Home-slider/.1943818496043064224_800_x_400.jpg")',
                }}
              />
            </div>
            <div className="col-sm-4">
              <Link
                href="/header/special-offers/fall-discount-10"
                className="service-title"
                style={{ height: 300 }}
              >
                <h4>Fall discount (10 %)</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="clear" />
      </section>
    </div>
  );
}
