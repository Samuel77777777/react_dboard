import Sidebar from "../components/Sidebar";
import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";

const Companies = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="m-3 p-3">
            <button class="bg-green-500 hover:bg-green-700  text-white font-bold py-3 px-3 rounded focus:outline-none focus:shadow-outline m-3">
              update
            </button>

            <button
              class="bg-red-500 hover:bg-red-700  text-white font-bold py-3 px-3 rounded focus:outline-none focus:shadow-outline"
              type=""
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
    { field: "phone", headerName: "Phone", width: 200 },
    { field: "website", headerName: "Website", width: 200 },
    { field: "company", headerName: "Company", width: 200 },
  ];

  // const rows = [
  //   {
  //     id: 1,
  //     company: "Tesla",
  //     address: "Lumley",
  //     position: "Full Stack",
  //   },
  //   {
  //     id: 2,
  //     company: "Emmanuel",
  //     email: "emmanuel@gmail.com",
  //     address: "Lumley",
  //     position: "Full Stack",
  //   },
  //   {
  //     id: 3,
  //     company: "Emmanuel",
  //     email: "emmanuel@gmail.com",
  //     address: "Lumley",
  //     position: "Full Stack",
  //   },
  //   {
  //     id: 4,
  //     company: "Emmanuel",
  //     email: "emmanuel@gmail.com",
  //     address: "Lumley",
  //     position: "Full Stack",
  //   },
  //   {
  //     id: 5,
  //     company: "Emmanuel",
  //     email: "emmanuel@gmail.com",
  //     address: "Lumley",
  //     position: "Full Stack",
  //   },
  //   {
  //     id: 6,
  //     company: "Emmanuel",
  //     email: "emmanuel@gmail.com",
  //     address: "Lumley",
  //     position: "Full Stack",
  //   },
  // ];

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      console.log();
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  //get what you want from the api

  const rowData = users?.map((user) => {
    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      website: user?.website,
      company: user?.company?.name,
    };
  });

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

export default Companies;

const Div = Styled.div`
  display: flex;
  width: 100%;
  .listContainer {
    flex: 6;
 

    
  }
`;
