import React from "react";
import Hero from "../components/Hero";
import Homecards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewJobs from "../components/viewJobs";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Welcom to react Jobs Site"
        subtitle="You will find best jobs here"
      />
      <Homecards />
      <JobListings isHome={true} />
    <ViewJobs/>
    </>
  );
};

export default HomePage;
