import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container">
        <article className="gallery-post">
          <div className="slider">
            <div className="swiper-container swiper-container-horizontal swiper-container-3d swiper-container-coverflow">
              <div
                id="content_gallery"
                className="swiper-wrapper"
                style={{
                  transform: "translate3d(-3420px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <Link
                  href="/image/IMG_3261.png"
                  className="swiper-slide"
                  style={{
                    backgroundImage: "url(/image/IMG_3261.png)",
                    width: 1140,
                    transform:
                      "translate3d(0px, 0px, -300px) rotateX(0deg) rotateY(150deg)",
                    zIndex: -2,
                    transitionDuration: "0ms",
                  }}
                >
                  <Image
                    alt=""
                    src="/image/IMG_3261.png"
                    width={1140}
                    height={600}
                    data-description=""
                  />
                  <div
                    className="swiper-slide-shadow-left"
                    style={{ opacity: 3, transitionDuration: "0ms" }}
                  />
                  <div
                    className="swiper-slide-shadow-right"
                    style={{ opacity: 0, transitionDuration: "0ms" }}
                  />
                </Link>
                <Link
                  href="/image/IMG_3275.png"
                  className="swiper-slide"
                  style={{
                    backgroundImage: "url(/image/IMG_3275.png)",
                    width: 1140,
                    transform:
                      "translate3d(0px, 0px, -200px) rotateX(0deg) rotateY(100deg)",
                    zIndex: -1,
                    transitionDuration: "0ms",
                  }}
                >
                  <Image
                    alt=""
                    src="/image/IMG_3275.png"
                    width={1140}
                    height={600}
                    data-description=""
                  />
                  <div
                    className="swiper-slide-shadow-left"
                    style={{ opacity: 2, transitionDuration: "0ms" }}
                  />
                  <div
                    className="swiper-slide-shadow-right"
                    style={{ opacity: 0, transitionDuration: "0ms" }}
                  />
                </Link>
                <Link
                  href="/image/IMG_3294.png"
                  className="swiper-slide swiper-slide-prev"
                  style={{
                    backgroundImage: "url(/image/IMG_3294.png)",
                    width: 1140,
                    transform:
                      "translate3d(0px, 0px, -100px) rotateX(0deg) rotateY(50deg)",
                    zIndex: 0,
                    transitionDuration: "0ms",
                  }}
                >
                  <Image
                    alt=""
                    src="/image/IMG_3294.png"
                    width={1140}
                    height={600}
                    data-description=""
                  />
                  <div
                    className="swiper-slide-shadow-left"
                    style={{ opacity: 1, transitionDuration: "0ms" }}
                  />
                  <div
                    className="swiper-slide-shadow-right"
                    style={{ opacity: 0, transitionDuration: "0ms" }}
                  />
                </Link>
                <Link
                  href="/image/IMG_3299.png"
                  className="swiper-slide swiper-slide-active"
                  style={{
                    backgroundImage: "url(/image/IMG_3299.png)",
                    width: 1140,
                    transform:
                      "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)",
                    zIndex: 1,
                    transitionDuration: "0ms",
                  }}
                >
                  <Image
                    alt=""
                    src="/image/IMG_3299.png"
                    width={1140}
                    height={600}
                    data-description=""
                  />
                  <div
                    className="swiper-slide-shadow-left"
                    style={{ opacity: 0, transitionDuration: "0ms" }}
                  />
                  <div
                    className="swiper-slide-shadow-right"
                    style={{ opacity: 0, transitionDuration: "0ms" }}
                  />
                </Link>
                <Link
                  href="/image/IMG_3303.png"
                  className="swiper-slide swiper-slide-next"
                  style={{
                    backgroundImage: "url(/image/IMG_3303.png)",
                    width: 1140,
                    transform:
                      "translate3d(0px, 0px, -100px) rotateX(0deg) rotateY(-50deg)",
                    zIndex: 0,
                    transitionDuration: "0ms",
                  }}
                >
                  <Image
                    alt=""
                    src="/image/IMG_3303.png"
                    width={1140}
                    height={600}
                    data-description=""
                  />
                  <div
                    className="swiper-slide-shadow-left"
                    style={{ opacity: 0, transitionDuration: "0ms" }}
                  />
                  <div
                    className="swiper-slide-shadow-right"
                    style={{ opacity: 1, transitionDuration: "0ms" }}
                  />
                </Link>
                <Link
                  href="/image/IMG_3307.png"
                  className="swiper-slide"
                  style={{
                    backgroundImage: "url(s/image/IMG_3307.png)",
                    width: 1140,
                    transform:
                      "translate3d(0px, 0px, -200px) rotateX(0deg) rotateY(-100deg)",
                    zIndex: -1,
                    transitionDuration: "0ms",
                  }}
                >
                  <Image
                    alt=""
                    src="/image/IMG_3307.png"
                    width={1140}
                    height={600}
                    data-description=""
                  />
                  <div
                    className="swiper-slide-shadow-left"
                    style={{ opacity: 0, transitionDuration: "0ms" }}
                  />
                  <div
                    className="swiper-slide-shadow-right"
                    style={{ opacity: 2, transitionDuration: "0ms" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
            style={{ left: "759.5px" }}
          >
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
          </div>
          <h1 className="text-center">Rooms</h1>
          <p />
          <div
            id="content_gallery0"
            className="content_galleria"
            style={{ height: 500 }}
          >
            <Link href="/image/IMG_3261.png" />
            <Link href="/image/IMG_3275.png" />
            <Link href="/image/IMG_3294.png" />
            <Link href="/image/IMG_3299.png" />
            <Link href="/image/IMG_3303.png" />
            <Link href="/image/IMG_3307.png" />
          </div>
          <p />
        </article>
        <div className="other-gallery">
          <div className="gallery">
            <div className="row">
              <div className="col-sm-4">
                <Link className="gallery-item" href="/photo-gallery/rooms/">
                  <Image
                    alt="Rooms"
                    src="/image/5425868568293427037_600_x_500"
                    width={360}
                    height={300}
                  />

                  <span>Rooms</span>
                </Link>
              </div>
              <div className="col-sm-4">
                <Link
                  className="gallery-item"
                  href="/photo-gallery/couples-room/"
                >
                  <Image
                    alt="Couples room"
                    src="/image/5425868568292427036_600_x_500.png"
                    width={360}
                    height={300}
                  />
                  <span>Couples room</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/photo-gallery" className="btn btn-primary btn-lg">
              Back to all photo galleries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
