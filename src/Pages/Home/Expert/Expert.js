import React from "react";

const Expert = ({ expert }) => {
  const { name, img, details } = expert;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details}</p>
          <button className="btn btn-primary">
            Read More About the Author
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expert;
