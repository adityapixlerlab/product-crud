import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Update from "./Update";
import "./File.css";
import { Link } from "@material-ui/core";
function ProductFile() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

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

  return (
    <div>
      {!toggle ? (
        <table>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Offer Price</th>
            <th>Photo</th>
            <th>Created By</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>

          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.title}</td>

              <td>{item.price}</td>
              <td>{item.offer_price}</td>
              <td>
                {
                  <img
                    src={"https://groceryshop-api.herokuapp.com" + item.photo}
                    alt=""
                    height="60"
                  />
                }
              </td>
              <td>{item.created_by.name}</td>
              <td>{item.status}</td>
              <td>{item.created_at}</td>
              <td>
                <Link onClick={() => setToggle(!toggle)}>
                  <EditIcon />
                </Link>
                <Link>
                  <DeleteIcon />
                </Link>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <Update />
      )}
    </div>
  );
}

export default ProductFile;
