import React from "react";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container">
        <article className="simple-article">
          <div
            className="boxed-title-image-cover"
            style={{
              backgroundImage: "url(/image/7425883568329427110_1170_x_654.png)",
            }}
          >
            <h1>
              <span>Happy Couple</span>
            </h1>
          </div>
          <p>
            <br />
          </p>
          <p>
            Spend a romantic night at our beautifully decorated suite-deluxe
            room.
          </p>
          <div>
            The price includes breakfast in room, high speed Wi-fi and 15%
            discount voucher for room service dinner.
          </div>
        </article>
      </section>
    </div>
  );
}
