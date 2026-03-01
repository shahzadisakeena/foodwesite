import React from "react";
import AboutUs from "../components/AboutUs";
import Journey from "../components/Journey";
import CraftDetails from "../components/CraftDetails";
import Ingridient from "../components/Ingridient";
import Reviews from "../components/Reviews";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
const page = () => {
  return (
    <div className="font-ftr">
      <AboutUs />
      <Journey />
      <CraftDetails />
      <Ingridient />
      <Reviews />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default page;
