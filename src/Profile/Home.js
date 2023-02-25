import React from "react";

export default function Home(props) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr)",
          height: "620px",
        }}
      >
        <div style={{ backgroundColor: "#d5c455" }} className="image">
          <img
            onClick={props.handleFunction}
            style={{ width: "400px", marginTop: "40px" }}
            src={props.image}
            alt="Bettercallme"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FEFCFF",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
          }}
          className="info"
        >
          <h1 style={{ fontSize: "60px" }}>I'm {props.name}</h1>
          <h4 style={{ fontSize: "25px", color: "#d5c455", marginTop: "10px" }}>
            {props.title}
          </h4>
          <p style={{ marginTop: "10px", color: "grey" }}>{props.bio}</p>
        </div>
      </div>
    </>
  );
}
