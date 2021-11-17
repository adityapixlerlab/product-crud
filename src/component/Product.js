import axios from "axios";
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
const Product = () => {
  const columns = [
    { title: "Title", field: "title", validate: (rowData) => Boolean(rowData.title) },
    {
      title: "Price",
      field: "price",
      type: "numeric",
      validate: (rowData) => Boolean(rowData.price),
    },
    {
      title: "Offer Price",
      field: "offer_price",
      type: "numeric",
      validate: (rowData) => Boolean(rowData.offer_price),
    },
    {
      title: "Photo",
      field: "photo",
      render: (rowData) => (
        <img
          alt=""
          src={"https://groceryshop-api.herokuapp.com" + rowData.photo[0]}
          style={{ width: 70 }}
        />
      ),
    },
    { title: "Created By", field: "created_by", render: (rowData) => rowData.created_by.name },
    {
      title: "Status",
      field: "status",
      render: (rowData) => <div>{rowData.status ? "active" : "deactive"}</div>,
    },
    { title: "Created At", field: "created_at" },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://groceryshop-api.herokuapp.com/api/product").then((res) => {
      setData(res.data.data);
    });
  };
  console.log(data);

  return (
    <div style={{ width: "70%" }}>
      <MaterialTable
        columns={columns}
        data={data}
        editable={{
          onRowAdd: (addData) =>
            new Promise((resolve, rejected) => {
              let newData = [...data, addData];
              setTimeout(() => {
                setData(newData);
              }, 2000);
              resolve();
              // console.log(addData);
            }),
          onRowDelete: (deleteData) =>
            new Promise((resolve, rejected) => {
              let value = deleteData.tableData.id;
              let deleteValue = [...data];
              deleteValue.splice(value, 1);
              setTimeout(() => {
                setData(deleteValue);
                resolve();
              }, 1000);
            }),

          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, rejected) => {
              let index = oldData.tableData.id;
              let updateValue = [...data];
              updateValue[index] = newData;
              setTimeout(() => {
                setData(updateValue);
                resolve();
              }, 2000);
            }),
        }}
        options={{ addRowPosition: "first", actionsColumnIndex: -1 }}
      />
    </div>
  );
};

export default Product;
