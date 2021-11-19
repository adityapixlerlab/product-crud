import React, { useState } from "react";

function Update({ val, rowData }) {
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(rowData, "====");
  return (
    <div className="container">
      <h1>Update Data</h1>
      <form onSubmit={val}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            defaultValue={rowData.title}
            onChange={(e) => handleChange(e)}
            className="textbox"
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            defaultValue={rowData.price}
            onChange={handleChange}
            className="textbox"
          />
        </label>
        <br />
        <label>
          Offer Price:
          <input
            type="text"
            name="offer_price"
            defaultValue={rowData.offer_price}
            onChange={handleChange}
            className="textbox"
          />
        </label>
        <br />
        <label>
          Photo:
          <input
            type="file"
            name="photo"
            // value={rowData.photo}
            onChange={handleChange}
            className="textbox"
          />
        </label>
        <br />
        <label>
          Created By:
          <input
            type="text"
            name="created_by"
            defaultValue={rowData.created_by.name}
            onChange={handleChange}
            className="textbox"
          />
        </label>
        <br />
        <label>
          Status:
          <input
            type="number"
            name="status"
            defaultValue={rowData.status}
            onChange={handleChange}
            className="textbox"
          />
        </label>
        <br />
        <label>
          Created At:
          <input
            type="text"
            name="created_at"
            defaultValue={rowData.created_at}
            onChange={handleChange}
            className="textbox"
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
