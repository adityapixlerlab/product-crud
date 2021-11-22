import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Update from "./Update";
import "./File.css";
import { Link } from "@material-ui/core";
function ProductFile() {
  const [data, setData] = useState([]);
  const [toggleData, setToggleData] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [addData, setAddData] = useState({ photo: [] });
  const [rowData, setRowData] = useState([]);
  const handleChangeData = (e) => {
    e.preventDefault();

    setAddData({ ...addData, [e.target.name]: e.target.value });
  };

  const handleAddData = (e) => {
    e.preventDefault();
    setData([...data, { ...addData, created_by: { name: addData.created_by } }]);
  };

  const handleImage = (e) => {
    setAddData({ ...addData, photo: URL.createObjectURL(e.target.files[0]) });
  };
  const handleDeleteData = (e) => {
    let deleteData = [...data];
    deleteData.splice(e, 1);
    setData(deleteData);
  };

  // const handleEditData = (e) => {
  //   e.preventDefault();
  //   // setData(data.map((row)=>{if(row._id === )}))
  // };

  console.log(addData);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://groceryshop-api.herokuapp.com/api/product").then((req) => {
      req.json().then((result) => {
        console.log(result.data);
        setData(result.data);
      });
    });
  };
  // console.log(rowData);
  return (
    <div>
      <table>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Offer Price</th>
          <th>Photo</th>
          <th>Created By</th>
          <th>Status</th>
          <th>Created At</th>
          <th>
            Actions{" "}
            <Link onClick={() => setToggle(!toggle)}>
              <AddIcon />
            </Link>
          </th>
        </tr>

        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.title}</td>

            <td>{item.price}</td>
            <td>{item.offer_price}</td>
            <td>
              <img src={item.photo} alt="" />
            </td>
            <td>{item.created_by.name}</td>
            <td>{item.status}</td>
            <td>{item.created_at}</td>
            <td>
              <Link
                onClick={() => {
                  setToggleData(!toggleData);
                  setRowData(item);
                }}
              >
                <EditIcon />
              </Link>
              <Link onClick={() => handleDeleteData(i)} style={{ marginLeft: 12 }}>
                <DeleteIcon />
              </Link>
            </td>
          </tr>
        ))}
      </table>
      <br />
      <br />
      {toggleData && <Update rowData={rowData} />}
      {toggle && (
        <div className="container">
          <h1>Add Data</h1>
          <form onSubmit={handleAddData}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChangeData}
                className="textbox"
              />
            </label>
            <br />
            <label>
              Price:
              <input
                type="text"
                name="price"
                value={data.price}
                onChange={handleChangeData}
                className="textbox"
              />
            </label>
            <br />
            <label>
              Offer Price:
              <input
                type="text"
                name="offer_price"
                value={data.offer_price}
                onChange={handleChangeData}
                className="textbox"
              />
            </label>
            <br />
            <label>
              Photo:
              <input type="file" name="photo" onChange={handleImage} className="textbox" />
            </label>
            <br />
            <label>
              Created By:
              <input
                type="text"
                name="created_by"
                onChange={handleChangeData}
                className="textbox"
              />
            </label>
            <br />
            <label>
              Status:
              <input
                type="number"
                name="status"
                value={data.status}
                onChange={handleChangeData}
                className="textbox"
              />
            </label>
            <br />
            <label>
              Created At:
              <input
                type="date"
                name="created_at"
                value={data.created_at}
                onChange={handleChangeData}
                className="textbox"
              />
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProductFile;
