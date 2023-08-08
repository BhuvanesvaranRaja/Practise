import React from "react";

export default function map(props) {
  return (
    <div>
      <p>
        this is{" "}
        {props.cars.map((values, index) => {
          return <li key={index}>{values}</li>;
        })}{" "}
      </p>
    </div>
  );
}
