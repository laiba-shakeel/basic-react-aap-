import React from "react";


export default function Post({ data }) {
  return (
    
    <div className="col-lg-3 col-sm-6 m-0 ">
      <div className="card m-auto px-0"  style={{
            overflow: "hidden",
            cursor: "pointer",
            borderRadius: "4px",
            border: "1px solid rgba(0,47,52,.2)",
            margin: "auto"
          }}>
        <img
          className="card-img-top"
          src={data.image}
          alt="Card image"
          style={{ width: "100%", height:"200px" }}
        />
        <div className="card-body">
          <p className="card-text">{data.desc}</p>
          <h5 className="card-title">{data.title}</h5>
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
