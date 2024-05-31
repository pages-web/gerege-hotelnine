import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <div className="container about">
        <div className="home-about" style={{ paddingTop: 30 }}>
          <article>{/* <Image alt="" src="" /> */}</article>
          <div className="col-sm-12">
            <h2>Booking for:</h2>
          </div>
          <div className="col-sm-12 Image-book">
            <div className="col-sm-6">
              <Link
                href="http://www.booking.com/hotel/mn/h9-nine-ulaanbaatar-ulaanbaatar2.html?aid=378266;label=bdot-g5ci8Q%2AvJjjaTJJMfllk4QS160851574018%3Apl%3Ata%3Ap1%3Ap21%2C093%2C000%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-146342138710%3Akwd-334108049%3Alp1010217%3Ali%3Adec%3Adm;sid=63c3f7e0ed770714ea916c004054b353;all_sr_blocks=138028602_88119498_1_1_0;checkin=2017-03-10;checkout=2017-03-11;dest_id=-2353539;dest_type=city;dist=0;group_adults=1;group_children=0;highlighted_blocks=138028602_88119498_1_1_0;hpos=21;no_rooms=1;room1=A;sb_price_type=total;srfid=92a4ea539106aff2c429604598ac70e84f6f0806X21;type=total;ucfs=1&"
                target="_blank"
              >
                <Image
                  alt=""
                  src="http://hotelnine.mn/static/sites/hotelnine/default/images/booking.png"
                />
              </Link>
            </div>
            <div className="col-sm-6">
              <Link
                href="https://www.expedia.com.hk/Ulaanbaatar-Hotels-Hotel-Nine.h17731026.Hotel-Information?chkin=2017%2F03%2F10&chkout=2017%2F03%2F11&rm1=a1&regionId=6131018&hwrqCacheKey=b941b894-d357-425c-a8d1-99fe549ef0fcHWRQ1489126177732&vip=false&c=97b0704b-a181-43d5-91ad-2c5c5a0d74f1&&exp_dp=602.54&exp_ts=1489126175121&exp_curr=HKD&exp_pg=HSR"
                target="_blank"
                className="logo"
              >
                <Image
                  alt=""
                  src="http://hotelnine.mn/static/sites/hotelnine/default/images/expedia.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
