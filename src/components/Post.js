import React from "react";

export default function Post({ data }) {
  return (
    <div className="col-4">
      <div className="card">
        <img
          className="card-img-top"
          src={data.image}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h4 className="card-title">{data.title}</h4>
          <p className="card-text">{data.desc}</p>
          <a href="#" className="btn btn-primary">
            See Profile
          </a>

          <p style={{ textAlign: "left" }} className="card-text">
            {data.address}
          </p>
        </div>
      </div>
    </div>
  );
}
