import React from "react";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container">
        <article className="simple-article">
          <div
            className="boxed-title-image-cover"
            style={{
              backgroundImage: "url(/image/1943818496043064224_1170_x_797.png)",
            }}
          >
            <h1>
              <span>Fall discount (10 %)</span>
            </h1>
          </div>
          <p>
            <br />
          </p>
          <p>
            H9-Ulaanbaatar is having sale up to 10-15 % for all types of rooms
            during low season.
          </p>
          <p>
            <span />
            The discounted price includes Breakfast, Free Wi-Fi, VAT and City
            tax.{" "}
          </p>
        </article>
      </section>
    </div>
  );
}
