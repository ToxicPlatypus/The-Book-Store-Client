import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, img, description, price, supplier, quantity } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <p className="fw-bold">Supplier: {supplier}</p>
      <h5>Available: {quantity} sets</h5>
      <button
        onClick={() => navigateToServiceDetail(_id)}
        className="btn btn-primary"
      >
        UPDATE
      </button>
    </div>
  );
};

export default Service;
