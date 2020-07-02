import React, { useState, useEffect } from "react";
import axios from "axios";

function Fib() {
  const [seenIndexes, setSeenIndexes] = useState();
  const [values, setValues] = useState({});
  const [index, setIndex] = useState("");

  async function fetchValues() {
    const values = await axios.get("/api/values/current");
    setValues(values.data);
  }

  async function fetchIndexes() {
    const response = await axios.get("/api/values/all");
    setSeenIndexes(response.data);
  }

  const renderSeenIndexes = () => {
    return seenIndexes ? seenIndexes.map(({ number }) => number).join(", ") : null;
  };

  const renderValues = () => {
    return Object.keys(values).map((key) => (
      <div key={key}>
        for index {key} I calculated {values[key]}
      </div>
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("/api/values", { index });
    setIndex("");
  };

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index</label>
        <input value={index} onChange={(e) => setIndex(e.target.value)} />
        <button>Submit</button>
      </form>
      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}
      <h3>Calculated values</h3>
      {renderValues()}
    </div>
  );
}

export default Fib;
