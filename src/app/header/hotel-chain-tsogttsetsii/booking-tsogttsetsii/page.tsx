import React from "react";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <div className="container about">
        <div className="home-about" style={{ paddingTop: 30 }}>
          <div className="col-sm-12">
            <h2>Booking Form</h2>
          </div>
          <div className="col-md-12" id="form_container_6">
            <form
              action="/admin/forms/submission/6/"
              method="post"
              id="form_id_6"
            >
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                defaultValue="AX5ZDw8jruAa62FZIcWfDtMxOuJvV035"
              />
              <div className="row m-p25">
                <div className="form-group">
                  <div className="col-md-6">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      defaultValue=""
                      data-msg-required="Please enter your full name."
                      maxLength={100}
                      className="form-control"
                      name="form_field_38"
                      id="firstname"
                      //   required=""
                      //   fdprocessedid="4gi1q"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>E-mail Address</label>
                    <input
                      type="email"
                      placeholder="E-mail Address"
                      defaultValue=""
                      data-msg-required="Please enter your email address."
                      data-msg-email="Please enter last name."
                      maxLength={100}
                      className="form-control"
                      name="form_field_39"
                      id="lastname"
                      //   required=""
                      //   fdprocessedid="a4kwwf"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <div className="col-md-6">
                    <label>Check in</label>
                    <div className="arrow-form-field">
                      <input
                        type="text"
                        id="checkin"
                        name="form_field_40"
                        className="datepicker hasDatepicker"
                        defaultValue="30/05/2024"
                        // fdprocessedid="h43fsi"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label>Check out</label>
                    <div className="arrow-form-field">
                      <input
                        type="text"
                        id="checkout"
                        name="form_field_41"
                        className="datepicker hasDatepicker"
                        defaultValue="30/05/2024"
                        // fdprocessedid="wqgjjxj"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <div className="col-md-3">
                    <label>Adult</label>
                    <input
                      type="text"
                      id="adult"
                      maxLength={3}
                      name="form_field_42"
                      placeholder="Enter number"
                      //   fdprocessedid="oh6xop"
                    />
                  </div>
                  <div className="col-md-3">
                    <label>Room</label>
                    <input
                      type="text"
                      id="adult"
                      maxLength={3}
                      name="form_field_43"
                      placeholder="Enter number"
                      //   fdprocessedid="yxi09"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Phone number</label>
                    <input
                      type="text"
                      id="adult"
                      maxLength={100}
                      name="form_field_45"
                      placeholder="Enter phone number"
                      //   fdprocessedid="25ygzh"
                    />
                  </div>
                </div>
              </div>
              <div
                className="g-recaptcha"
                data-sitekey="6LcWdjgUAAAAAPUXk0GFc86dd1ZDMCrOoJViJsTZ"
              >
                <div style={{ width: 304, height: 78 }}>
                  <div>
                    <iframe
                      title="reCAPTCHA"
                      width={304}
                      height={78}
                      role="presentation"
                      name="a-h6v5gpbsz5cz"
                      frameBorder={0}
                      scrolling="no"
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                      src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcWdjgUAAAAAPUXk0GFc86dd1ZDMCrOoJViJsTZ&co=aHR0cDovL2hvdGVsbmluZS5tbjo4MA..&hl=en&v=joHA60MeME-PNviL59xVH9zs&size=normal&cb=8bsprtm67qlf"
                    />
                  </div>
                  <textarea
                    id="g-recaptcha-response"
                    name="g-recaptcha-response"
                    className="g-recaptcha-response"
                    style={{
                      width: 250,
                      height: 40,
                      border: "1px solid rgb(193, 193, 193)",
                      margin: "10px 25px",
                      padding: 0,
                      resize: "none",
                      display: "none",
                    }}
                    defaultValue={""}
                  />
                </div>
                <iframe style={{ display: "none" }} />
              </div>
              <div className="row">
                <div className="col-md-12 book-btn">
                  <input
                    type="submit"
                    defaultValue="Submit"
                    className="btn btn-success"
                    // fdprocessedid="mgd0wb"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="clear" />
          <div className="padding-bottom: 30px;" />
        </div>
      </div>
    </div>
  );
}
