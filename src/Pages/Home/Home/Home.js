import React from "react";
import { Link } from "react-router-dom";
import Comment from "../../Comment/Comment";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <Services></Services>
      <div className="mt-4 container text-center">
        <Link to="/manageinventory" className="btn btn-warning p-4">
          Manage Inventory
        </Link>
      </div>
      <Experts></Experts>
      <Comment></Comment>
    </>
  );
};

export default Home;
