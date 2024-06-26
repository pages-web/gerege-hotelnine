"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fdprocessedid?: string;
  }
}

export default function Home() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((previousState) => !previousState);
  };
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
                  "url(/image/1943818496043064224_1920_x_1309.png)",
                backgroundPositionY: "0%",

                opacity: 1,
                transform: "translate3d(0px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            >
              <div className="container fullheight">
                <div className="rel fullheight faderight">
                  <div className="caption">
                    <h2
                      style={{ visibility: "visible" }}
                      className="animated slideInLeft"
                    >
                      Hotel Nine Ulaanbaatar
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
                  "url(/image/1943818496043064224_1920_x_1309.png)",
                backgroundPositionY: "50%",
                width: "1519px",
                opacity: 0,
                transform: "translate3d(-1519px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            >
              <div className="container fullheight">
                <div className="rel fullheight faderight">
                  <div className="caption">
                    <h2 className="" style={{ visibility: "visible" }}>
                      Be like a Business King
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
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            <span className="swiper-pagination-bullet"></span>
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
                          <select fdprocessedid="j4rz4c">
                            <option>Ulaanbaatar</option>
                            <option>Sukhbaatar</option>
                            <option>Tsogt Tsetsii</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 book-left-col">
                        <label>Adult</label>
                        <div className="arrow-form-field select">
                          <select fdprocessedid="iffiirs">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 book-right-col">
                        <label>Room</label>
                        <div className="arrow-form-field select">
                          <select fdprocessedid="37pj7e">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <Link
                          className="btn btn-primary btn-lg-book btn-block"
                          href="/header/booking"
                        >
                          Book
                        </Link>
                      </div>

                      <div className="col-sm-12"></div>
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
              className="hidden-xs"
              alt=""
              src="/image/logo_un.png"
              width={200}
              height={100}
            />

            <h2>Hotel Nine Ulaanbaatar</h2>
          </div>
          <div>
            <p>
              “Hotel Nine” the first ever national chain of hotels has
              established its first 3 star hotel in January of 2012 in
              Sukhbaatar soum of Selenge province.
            </p>
            <p>
              Hotel Nine Sukhbaatar features 9 standard rooms7, 1 lux room,
              Conference hall, VIP room, complex service of sauna, jakuzi, spa
              and massage as well as Modern Nomads Restaurant which serves
              Mongolian, Europe and international cuisine and beverages.
            </p>
            <p>We provide comfortable and affordable accommodation.</p>
          </div>
          <div></div>
          <p style={{ textAlign: "center" }}>
            <strong>Best location and Best choice</strong>
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>Welcome to Hotel Nine Ulaanbaatar</strong>
          </p>
        </div>

        <div className="parallax">
          <div
            // href=""
            className="bg__360"
            data-toggle="modal"
            data-target="#modal360"
            // onClick={handleClick}
          >
            <div className="text-center">
              <h4>Virtual tour</h4>
              <Image
                alt=""
                src="/image/360_icon.png"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="intro">
          <Link href="/" className="hotel-thumb">
            <div className="thumb-image">
              <Image
                alt=""
                src="/image/4606271830379144488_433_x_500.png"
                width={500}
                height={433}
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
                src="/image/7425877568319427081_750_x_500.png"
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
      {/* {clicked ? ( */}
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
                onClick={() => setClicked(!clicked)}
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
                      width="840"
                      height="450"
                      frameBorder="0"
                      style={{ border: "0" }}
                      allowFullScreen
                    />
                  </div>
                  <div role="tabpanel" className="tab-pane" id="floor2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2smn!4v1488429661746!6m8!1m7!1sDLEArS12KGgAAAQvO6VonQ!2m2!1d47.92046397924236!2d106.9219775264096!3f127.5517164865406!4f-15.168220683754626!5f0.7820865974627469"
                      width="840"
                      height="450"
                      style={{ border: "0" }}
                      // allowfullscreen
                    />
                  </div>
                  <div role="tabpanel" className="tab-pane" id="floor3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2smn!4v1488429661746!6m8!1m7!1sDLEArS12KGgAAAQvO6VonQ!2m2!1d47.92046397924236!2d106.9219775264096!3f127.5517164865406!4f-15.168220683754626!5f0.7820865974627469"
                      width="840"
                      height="450"
                      // frameborder="0"
                      style={{ border: "0" }}
                      // allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ) : (
        ""
      )} */}
    </div>
  );
}
