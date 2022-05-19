import React, { useEffect, useState } from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import Service from "../Home/Service/Service";

const About = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <PageTitle title="About"></PageTitle>
      <h2 className="text-primary text-center">This is your added books</h2>
      <div className="row mt-4">
        <div className="services-container">
          {services.slice(6).map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
