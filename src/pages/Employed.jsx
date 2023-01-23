import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Styled from "styled-components";
import { React, useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Employed = () => {
  




  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="m-3 p-3">
            <button class="bg-green-500 hover:bg-green-700  text-white font-bold py-3 px-3 rounded focus:outline-none focus:shadow-outline m-3">
              Update
            </button>

            <button
              class="bg-red-500 hover:bg-red-700  text-white font-bold py-3 px-3 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  const cols = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "phone", width: 200 },
    { field: "website", headerName: "Website", width: 200 },
    { field: "company", headerName: "Company", width: 200 },
    { field: "address", headerName: "Address", width: 200 },
  ];

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const rowData = users?.map((user) => {
    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      website: user?.website,
      company: user?.company?.name,
      address: user?.address?.city,
    };
  });

  // const rows = [
  //   {
  //     id: 1,
  //     studentName: "Emmanuel",
  //     company: "tesla",
  //     age: 27,
  //     technology: "Boostrap",
  //     Email: "samuelbkoroma7@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     studentName: "Emmanuel",
  //     company: "tesla",
  //     age: 27,
  //     technology: "Boostrap",
  //     Email: "samuelbkoroma7@gmail.com",
  //   },
  //   {
  //     id: 4,
  //     studentName: "Emmanuel",
  //     company: "tesla",
  //     age: 27,
  //     technology: "Boostrap",
  //     Email: "samuelbkoroma7@gmail.com",
  //   },
  //   {
  //     id: 5,
  //     studentName: "Emmanuel",
  //     company: "tesla",
  //     age: 27,
  //     technology: "Boostrap",
  //     Email: "samuelbkoroma7@gmail.com",
  //   },
  //   {
  //     id: 6,
  //     studentName: "Emmanuel",
  //     company: "tesla",
  //     age: 27,
  //     technology: "Boostrap",
  //     Email: "samuelbkoroma7@gmail.com",
  //   },
  //   {
  //     id: 8,
  //     studentName: "Emmanuel",
  //     company: "tesla",
  //     age: 27,
  //     technology: "Boostrap",
  //     Email: "samuelbkoroma7@gmail.com",
  //   },
  // ];

  return (
    <Div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataGrid
          className="m-4 shadow"
          rows={rowData}
          columns={cols.concat(actionColumn)}
          checkboxSelection
        />
      </div>
    </Div>
  );
};

export default Employed;

const Div = Styled.div`
  display: flex;
  width: 100%;
  .listContainer {
    flex: 6;
    .msg{
      margin :10px;
    }

    
  }
`;
