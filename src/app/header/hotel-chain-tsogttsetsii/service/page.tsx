import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container service">
        <div className="h9-page-header white">
          <h1>Services</h1>
          <p />
        </div>
        <div className="single-service">
          <div className="row">
            <div className="col-sm-8 ">
              <div
                className="service-thumb"
                style={{
                  backgroundImage:
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-7425876568312427127_800_x_400.JPG")',
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#77"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Conference &amp; Meeting Halls</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="77"
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
                    Conference &amp; Meeting Halls
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/IMG_5874.JPG"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Fully equipped facilities for meetings and events are
                    located on the second floor of the hotel. A large hall for
                    conferences, seminars and banquets has capacity to host
                    100-160 persons. A separate business meeting room is for
                    16-20 persons. For more information on those facilities
                    please contact the reception.
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-7425879568322427126_800_x_400.JPG")',
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#78"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Sauna</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="78"
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
                    Sauna
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/IMG_5792.JPG"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    We offer both dry and wet sauna types for 4-6 persons
                    supplemented with Jacuzzi and small pool for excellent
                    relief and relaxing atmosphere. For more information please
                    contact the reception. <br />
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-7425876568313427128_800_x_400.JPG")',
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#76"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Karaoke</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="76"
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
                    Karaoke
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/IMG_5800.JPG"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Karaoke with four rooms for 2-10 persons each is located on
                    the basement B1 floor of the hotel.
                  </p>
                  <p>Opening hours: Everyday 5:00pm-11:30pm midnight</p>
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-2975822494082443918_800_x_400.JPG")',
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#75"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Aurora Bar</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="75"
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
                    Aurora Bar
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/moderan.JPG"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    The Aurora Bar &amp; Night Club entrance is located at
                    western side of the hotel building.
                  </p>
                  <p>
                    Opening hours: Everyday 5:00pm-11:30pm midnight except
                    Wednesday (with entrance fee)
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-1171537506800497001_800_x_400.jpg")',
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Modern Nomads Restaurant</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="74"
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
                    Modern Nomads Restaurant
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/mnomads.jpg"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Located on the first floor of the hotel, Modern Nomads
                    restaurant offers wide selection of traditional and modern
                    Mongolian dishes supplemented by variety of cocktails and
                    drinks. The restaurant has total of 100 seats and three
                    additional VIP rooms for 6-10 persons.
                  </p>
                  <p>Opening hours: Everyday 7:00am – 11:00pm</p>
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-8509406950828721856_800_x_400.jpg")',
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#73"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Luggage Storage</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="73"
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
                    Luggage Storage
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/1170-x410-luggage.jpg"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    To have your luggage stored, please contact the reception.
                    We will be happy to arrange luggage storage for you. For
                    security reasons please do not leave any luggage unattended
                    in the hotel lobby area or at the hotel entrance doors.{" "}
                    <br />
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-7425876568314427086_800_x_400.JPG")',
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#72"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Lost and Found</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="72"
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
                    Lost and Found
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/IMG_5815.JPG"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Please contact the reception for assistance. All lost and
                    found items can be collected here.
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-5425869568293427010_800_x_400.jpg")',
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#71"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Safe</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="71"
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
                    Safe
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/IMG_3303.jpg"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    The electric safe for your valuable items is located inside
                    the wardrobe. Instructions in English on how to use the safe
                    are printed on the safe door. Please read those instructions
                    carefully. Prior to checking out please make sure you left
                    the safe door wide open.
                    <br />
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-6425877568320427119_800_x_400.jpg")',
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Laundry</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="70"
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
                    Laundry
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/IMG_2668.jpg"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    The Laundry Bag is placed inside the wardrobe. Please put
                    your items in the bag together with the filled-out Laundry /
                    Ironing Bill and hang the “Please collect my laundry”
                    outside your door. Laundry is charged to your room account
                    according to the listed prices. Your laundry is to be
                    collected before 11am and will be returned in 24 hours.{" "}
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-992067526353350922_800_x_400.jpg")',
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Air Condition</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="69"
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
                    Air Condition
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/2.jpg"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Your room is equipped with automatic air condition panel
                    that allows adjusting the room temperature to your liking.
                    Remote control is located on the wall near the entrance
                    door. The most comfortable suggested mode is the Cool 22 C°,
                    Auto pre-regulated for your room. <br />
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-992067526353350925_800_x_400.JPG")',
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Wakeup Call Service</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="68"
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
                    Wakeup Call Service
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/7.JPG"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Should you wish a wakeup call service please contact the
                    reception indicating the desired time for your wakeup call.
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-7425878568329427102_800_x_400.JPG")',
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Mini Bar</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="67"
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
                    Mini Bar
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/IMG_5648.JPG"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Your room has a mini bar containing cold beverages and
                    snacks, with prices listed in the menu. Consumed items are
                    charged to your account separately from the room rate and
                    those are payable at check out time on the departure day.{" "}
                    <br />
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
                    'url("http://hotelnine.mn/media/hotelnine/content/Gallery/.-5425868568296427025_800_x_400.jpg")',
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Internet</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="66"
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
                    Internet
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/Gallery/IMG_3294.jpg"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Your room is equipped with free high speed internet
                    connection. An internet patch cable is located inside the
                    desk drawer. Free Wi-Fi is available on the each floors. To
                    access Wi-fi, please enter the password “welcomeh9”. Should
                    you have trouble connecting please contact to reception.
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-7136451822918960174_800_x_400.jpg")',
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Housekeeping</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="65"
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
                    Housekeeping
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/additional.jpg"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Housekeeping &amp; room cleaning service is available 9:00am
                    – 6:00pm. Please hang the “Please make up room” card outside
                    your entrance door to ensure the room is serviced. <br />
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.-7425878568329427102_800_x_400.JPG")',
                }}
              ></div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Breakfast</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="64"
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
                    Breakfast
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/IMG_5648.JPG"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Breakfast is served 7:00am - 9:30am at the Modern Nomads
                    restaurant located on the first floor of our hotel.
                    Breakfast tickets are provided together with room keys
                    during the check-in time at the reception. Breakfast is
                    included in your room rate.
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
                    'url("http://hotelnine.mn/media/hotelnine/content/services/.3389025820485050843_800_x_400.jpg")',
                }}
              >
                <Link
                  href=""
                  className="btn btn-primary btn-lg"
                  data-toggle="modal"
                  data-target="#63"
                >
                  More information
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-title" style={{ height: 300 }}>
                <h4>Check Out Time</h4>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="63"
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
                    Check Out Time
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Image
                      alt=""
                      src="http://hotelnine.mn/media/hotelnine/content/services/private-driver-for-hire.jpg"
                      width={1200}
                      height={800}
                    />
                  </p>
                  <p>
                    Our check out time is 12 noon of the departure day. Should
                    you wish to extend your stay please contact the reception at
                    least three (3) hours before noon. We shall try our best to
                    meet your extension requirements subject to room
                    availability. <br />
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
