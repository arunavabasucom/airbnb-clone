import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Search() {
  return (
    <div>
      <Header />
      <main className="flex ">
        <section>
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays in march</h1>

          <div className="hidden">
            <p>Cancellation Flexibility</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

