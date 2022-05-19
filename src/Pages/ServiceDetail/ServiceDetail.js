import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const stockRef = useRef("");
  const [service, setService] = useState({});
  const [spinner, setSpinner] = useState(true);

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setSpinner(false);
      });
  }, [service, serviceId]);

  const handleDelivered = () => {
    let quantity = service.quantity;
    quantity -= 1;
    //console.log(quantity);
    const updateItem = { quantity };
    console.log("updateItem", updateItem);

    fetch(`http://localhost:5000/service/${serviceId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Delivered Please Reload for Availability");
      });
  };

  const handleStock = (event) => {
    event.preventDefault();
    const newStockedItem = parseInt(stockRef.current.value);
    console.log(newStockedItem);
    let quantity = service.quantity + newStockedItem;
    console.log(quantity);

    const updateItem = { quantity };
    console.log(updateItem);

    fetch(`http://localhost:5000/service/${serviceId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Stock Added");
      });
  };

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
        <button onClick={handleDelivered} className="btn btn-primary">
          Delivered
        </button>
        <p className="fw-bold">
          NB:Please Reaload To See Updated Available Books
        </p>
      </div>
      <div>
        <h2 className="mt-4">Restock Items</h2>
        <form onSubmit={handleStock}>
          <input
            type="text"
            name="text"
            ref={stockRef}
            id=""
            placeholder="Add quantity"
          />
          <br />
          <button onClick={refreshPage} className="btn btn-primary mt-2">
            Add to stock
          </button>
          <br />
          {/* <Link to="/manage-item">Manage Inventory</Link> */}
        </form>
      </div>
    </div>
  );
};

export default ServiceDetail;
