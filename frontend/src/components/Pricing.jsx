import React from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";

export default function Pricing() {
  const pricing = [
    {
      imageURL: "./pricing.jpg",
      title: "QUATERLY",
      price: 12000,
      length: 3,
    },
    {
      imageURL: "./pricing.jpg",
      title: "HALF YEARLY",
      price: 24000,
      length: 6,
    },
    {
      imageURL: "./pricing.jpg",
      title: "YEARLY",
      price: 36000,
      length: 12,
    },
  ];

  return (
    <section className="pricing">
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((pricing) => {
          return (
            <div className="card" key={pricing.title}>
              <img src={pricing.imageURL} alt={pricing.title} />
              <div className="title">
                <h1>PACKAGE</h1>
                <h3>₹ {pricing.price}</h3>
                <p>For {pricing.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Checkbox /> Equipment
                </p>
                <p>
                  <Checkbox />
                  All Day Free Training
                </p>
                <p>
                  <Checkbox />
                  Free Restroom
                </p>
                <p>
                  <Checkbox />
                  24x7 Skilled Support
                </p>
                <p>
                  <Checkbox />
                  20 Days Freeze Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
