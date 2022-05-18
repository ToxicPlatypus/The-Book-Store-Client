import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return (
    <div className="details">
      <h5>Welcome to detail: {service._id}</h5>
      <h2>Book Name: {service.name}</h2>
      <img src={service.img} alt="" />
      <p className="w-50 mx-auto">{service.description}</p>
      <h4>Price: {service.price}</h4>
      <h5>Supplier: {service.supplier}</h5>
      <h4>Available Books: {service.quantity}</h4>
      <div className="text-center">
        <button className="btn btn-primary">Delivered</button>
      </div>
    </div>
  );
};

export default ServiceDetail;
