import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container service">
        <div className="h9-page-header white">
          <h1>Services</h1>
          <p>
            Slip in to the comfort and excitement of Ulaanbaatar’s heart Hotel
            Nine We hope you will enjoy your stay with us
          </p>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 ">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    'url("/image/4526779844760057412_800_x_400.png")',
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#21"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Wine lounge</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="21"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Wine lounge
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/res.png"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Looking for a Good Flavor of Wine! You are exactly where you
                    are meant. There is located Wine Lounge for your degustation
                    of finest wines with an Upscale and Relaxed Environment at
                    the 3rd floor of Hotel Nine. <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 pull-right">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    "url(/image/5844774377798275638_800_x_400.JPG.png)",
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#19"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Modern Nomads Mongolian restaurant</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="19"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Modern Nomads Mongolian restaurant
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/5G9B8740_copy.png"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    A classic restaurant popular with both local and tourists,
                    offering elective menu of traditional Mongolian fare with
                    modern recipes, all using local ingredients. Modern nomads
                    are proud of Mongolia’s culinary traditions and offers the
                    guests the taste of rich Mongolian food culture, traditional
                    dishes with unique and natural flavors, presented in modern
                    dining style.
                  </p>
                  <div>
                    It also offers healthy alternatives and a wide selection of
                    imported drinks. Place with delightful service and friendly
                    atmosphere.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 ">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    'url("/image/5322912171214534748_800_x_400.png")',
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#20"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Double shot &amp;coffee cocktail restaurant</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="20"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Double shot &amp;coffee cocktail restaurant
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/MG_1697.png"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    The Best place for Coffee during the day and Cocktails at
                    night is located closest to you. Do not worry, Delicious
                    accompaniments and snacks are not missed here.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 pull-right">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    "url(/image/8509406950828721856_800_x_400.png)",
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Baggage Storage</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="18"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Baggage Storage
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/1170-x410-luggage.png"
                      width={1170}
                      height={410}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 ">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    "url(/image/992067526353350925_800_x_400..png)",
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Wake up call service</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="17"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Wake up call service
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/7.png"
                      width={1200}
                      height={800}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 pull-right">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    "url(/image/8717568439719616342_800_x_400.png)",
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Concierge Desk</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="16"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Concierge Desk
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/unnamed.png"
                      width={1200}
                      height={800}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 ">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    "url(/image/7780035024925272211_800_x_400.png)",
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Elevators</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="15"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Elevators
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/elevator.png"
                      width={1200}
                      height={800}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 pull-right">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    "url(/image/6425877568320427119_800_x_400.png)",
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Laundry Service</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="14"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Laundry Service
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/IMG_2668.png"
                      width={1200}
                      height={800}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 ">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    "url(/image/992067526353350922_800_x_400.png)",
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#13"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Room Service</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="13"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Room Service
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/2.png"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Do you prefer privacy or feeling to dine in your room while
                    watching your favorite? Just dial to the reception.
                    Motivated and skillful waitress from Modern Nomads
                    restaurant and Double Shot coffee&amp; cocktail restaurant
                    will be at your convenience by serving with delicious and
                    hot dishes to your room. <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 pull-right">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    "url(/image/4606271830358144440_800_x_400.png)",
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>News Stand</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="12"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    News Stand
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/ns.png"
                      width={1200}
                      height={800}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 ">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    "url(/image/4519068818862729817_800_x_400.png)",
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Airport pick up service</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="11"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Airport pick up service
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/pier_c1_140911.png"
                      width={1200}
                      height={800}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 pull-right">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    "url(/image/3389025820485050843_800_x_400.png)",
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Drop-off service</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="10"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Drop-off service
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/private-driver-for-hire.png"
                      width={1200}
                      height={800}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 ">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    "url(/image/7020851505473124748_800_x_400.png)",
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#9"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Conference room</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="9"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Conference room
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="/image/IMG_9479.png"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <div>We have a conference room and a VIP meeting room. </div>
                  <ul>
                    <li>
                      Conference room can accommodate up to 40 persons and comes
                      equipped with projection, projection screen, whiteboard,
                      inches LCD TV with HDMI input and mics.
                    </li>
                    <li>Equipped with 52 inches LCD TV, projector, mics, </li>
                    <li>VIP meeting room can accommodate up to 15 persons. </li>
                  </ul>
                  <p>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </section>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n#inrosub li /* this is the off state */\n{\n    background:yellow;\n}\n\n#inrosub li.active\n{\n    background:red;\n}\n",
        }}
      />
    </div>
  );
}
