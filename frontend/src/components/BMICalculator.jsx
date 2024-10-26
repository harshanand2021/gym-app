import React, { useState } from "react";
import { toast } from "react-toastify";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight, gender");
      return;
    }

    const heighInMeters = height / 100;
    const bmiValue = (weight / (heighInMeters * heighInMeters)).toFixed(2);
    setBmi(bmiValue);

    if(bmiValue < 18.5){
      toast.warning("You are underweight. Please take advice from Healthcare expert");
    }
    else if(bmiValue >= 18.5 && bmiValue < 24.9){
      toast.success("You have normal weight. Keep Mantaining your weight");
    }
    else if(bmiValue >= 24.9){
      toast.warning("You are Overweight. Please control your weight");
    }else{
      toast.error("Please enter all the fields correctly");
    }
  };

  return (
    <section className="bmi">
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label htmlFor="height">Height (in cm)</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
              <label htmlFor="weight">Weight (in Kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender">
                <option value="select">Select Gender</option>
                <option value={gender} id="male" onChange={(e) => setGender(e.target.value)}>Male</option>
                <option value={gender} id="female" onChange={(e) => setGender(e.target.value)}>Female</option>
              </select>
            </div>
              <button type="submit">Calculate BMI</button>
          </form>
          <div className="wrapper">
            <img src="/bmi.jpg" alt="bmiImage" />
          </div>
        </div>
      </div>
    </section>
  );
}
