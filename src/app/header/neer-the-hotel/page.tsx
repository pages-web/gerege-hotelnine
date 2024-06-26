import React from "react";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container near-hotel">
        <div
          className="image-header"
          style={{
            backgroundImage: 'url("/image/near.png")',
          }}
        >
          <h1>Near the hotel</h1>
        </div>
        <div className="rel">
          <span className="near-border" />
          <div className="row">
            <div className="col-md-6 near-item left-item">
              <div className="near-box">
                <h2>50 Mts</h2>
                <p>
                  Great Chinggis Khaan Square, Government House, Opera House,
                  Central Culture Palace, Central Tower, Orgil Supermarket,
                  Modern Nomad Restaurant, Double shot Coffee &amp; cocktail
                  restaurant, Central Post office
                </p>
              </div>
            </div>
            <div className="col-md-6 near-item right-item">
              <div className="near-box">
                <h2>100 Mts</h2>
                <p>
                  Urgoo Cinema, National Museum of Mongolian History, National
                  Academic Drama Theatre, Seoul Street, Peace Avenue, Shopping
                  Malls, Grand Khaan Pub, Museum of Choijin Lama, most
                  Embassies, Coffee Bean &amp; Tea Leaf, Business District
                </p>
              </div>
            </div>
            <div className="col-md-6 near-item left-item">
              <div className="near-box">
                <h2>300 Mts</h2>
                <p>
                  Presidential Palace, State Department Store, UB Department
                  Store, Zanabazar Museum of Fine Art, National Amusement Park,
                  Tengis Cinema, Public Swimming Pool, National Circus
                </p>
              </div>
            </div>
            <div className="col-md-6 near-item right-item">
              <div className="near-box">
                <h2>Under 2.5KM</h2>
                <p>
                  Gandantegchenling Monastery, Bogd Khan Palace Museum, National
                  Stadium, All Restaurants and Bars in the City
                </p>
              </div>
            </div>
            <div className="col-md-6 near-item left-item">
              <div className="near-box">
                <h2>Out of the City Attractions</h2>
                <p>
                  Zaisan Memorial 5km, Chinggis Khaan Stature Complex 51km,
                  Terelj National Park 37k
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
