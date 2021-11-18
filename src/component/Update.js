import { Card } from "@material-ui/core";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Update() {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    alert("submit");
  };

  return (
    <div>
      <Container style={{ margin: 10 }}>
        <Card style={{ height: 120 }}>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" value={data} onChange={handleChange} />
            </label>
            <label>
              Price:
              <input type="text" value={data} onChange={handleChange} />
            </label>
            <label>
              Offer Price:
              <input type="text" value={data} onChange={handleChange} />
            </label>
            <label>
              Photo:
              <input type="file" value={data} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </Card>
      </Container>
    </div>
  );
}

export default Update;
