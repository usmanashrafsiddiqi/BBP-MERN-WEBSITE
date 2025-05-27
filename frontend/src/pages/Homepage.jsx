import React from 'react';
import Header from '../components/Header';
import Properties from '../components/Properties';
import OurTeam from '../components/OurTeam';
import FeatureBanner from '../components/FeatureBanner'
import UpcomingProjects from '../components/UpcomingProjects';
import RegisterInterest from '../components/RegisterInterestForm';
import DeveloperCarousel from '../components/DeveloperCarousel';
import DealOfTheWeek from '../components/DealOfTheWeek';
import Footer from '../components/Footer';
const Homepage = () => {
  return (
    <div>
   <div className="p-2 md:p-4 bg-white overflow-hidden">
  <Header />
</div>


      <Properties />
      <OurTeam/>
      <FeatureBanner/>
      <UpcomingProjects/>
      <RegisterInterest/>
      <DeveloperCarousel/>
      <DealOfTheWeek/>
      <Footer/>
    </div>
  );
};

export default Homepage;
