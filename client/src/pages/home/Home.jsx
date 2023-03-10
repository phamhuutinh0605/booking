import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
          <h1 className="homeTitle">Khám phá Việt Nam</h1>
          <PropertyList />
        <Featured />
        <h1 className="homeTitle">Nhà ở mà khách yêu thích</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
      </div>
    </>
  );
};

export default Home;
