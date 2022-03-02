import React from "react";

function Footer() {
  return (
    <div
      className="grid grid-cols-1 gap-y-10 md:grid-cols-4 px-32 py-14 bg-gray-100
    text-gray-600"
    >
      <div
        className="space-y-4
        text-xs
        text-gray-800"
      >
        <h5 className="font-bold  text-2xl">ABOUT</h5>

        <p  className=" text-lg">Newsroom</p>
        <p className=" text-lg">Learn about new features</p>
        <p className=" text-lg">Letter from our founders</p>
        <p className=" text-lg">Careers</p>
        <p className=" text-lg">Investors</p>

        <p className=" text-lg" > Airbnb Luxe</p>
      </div>
      <div
        className="space-y-4
        text-xs
        text-gray-800"
      >
        <h5 className="font-bold text-2xl">Community</h5>
        <p className=" text-lg">Airbnb.org: disaster relief housing</p>
        <p className=" text-lg">Support Afghan refugees</p>
        <p className=" text-lg">Combating discrimination</p>
      </div>

      <div
        className="space-y-4
        text-xs
        text-gray-800"
      >
        <h5 className="font-bold text-2xl">Hosting</h5>
        <p className=" text-lg">Try hosting</p>
        <p className=" text-lg">AirCover: protection for Hosts</p>
        <p className=" text-lg">Explore hosting resources</p>
        <p className=" text-lg">Visit our community forum</p>
        <p className=" text-lg">How to host responsibly</p>
      </div>

      <div
        className="space-y-4
        text-xs
        text-gray-800"
      >
        <h5 className="font-bold text-2xl">Support</h5>
        <p className=" text-lg">Help Centre</p>
        <p className=" text-lg">Safety information</p>
        <p className=" text-lg">Cancellation options</p>
        <p className=" text-lg">Our COVID-19 Response</p>
        <p className=" text-lg">Supporting people with disabilities</p>
        <p className=" text-lg">Report a neighbourhood concern</p>
      </div>
    </div>
  );
}

export default Footer;
