import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container">
        <h1 className="simple-header">Photo gallery</h1>
        <div className="gallery">
          <div className="row">
            <div className="col-sm-4">
              <Link className="gallery-item" href="/photo-gallery/rooms/">
                <Image
                  alt="Rooms"
                  src="http://hotelnine.mn/media/hotelnine/content/Gallery/.-5425868568293427037_600_x_500.JPG"
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
                  src="http://hotelnine.mn/media/hotelnine/content/Gallery/.-5425868568292427036_600_x_500.jpg"
                  width={360}
                  height={300}
                />
                <span>Couples room</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
