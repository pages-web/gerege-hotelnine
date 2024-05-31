import React from "react";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container">
        <article className="simple-article">
          <div
            className="boxed-title-image-cover"
            style={{
              backgroundImage:
                'url("http://hotelnine.mn/media/hotelnine/content/offers/.9020877505510124683_1170_x_462.JPG")',
            }}
          >
            <h1>
              <span>Early Reservation</span>
            </h1>
          </div>
          <p />
          <div>
            Get ..% discount for your reservation by far 20 days before.
          </div>
          <div>Necessity:</div>
        </article>
      </section>
    </div>
  );
}
