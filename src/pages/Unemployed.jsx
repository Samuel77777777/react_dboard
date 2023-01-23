import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";

const Unemployed = () => {
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
              type="submit"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  //colums in the datagrid
  const cols = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "studentName", headerName: "Students", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "address", headerName: "address", width: 200 },
    { field: "Phone", headerName: "Phone", width: 200 },
    { field: "specialization", headerName: "Specialization", width: 200 },
  ];

  //rows
  const rows = [
    {
      id: 1,
      studentName: "Emmanuel",
      email: "emmanuel@gmail.com",
      address: "Lumley",
      Phone: "099349393",
      specialization: "Full Stack",
    },
    {
      id: 2,
      studentName: "Emmanuel",
      email: "emmanuel@gmail.com",
      address: "Lumley",
      Phone: "099349393",
      specialization: "Full Stack",
    },
    {
      id: 3,
      studentName: "Emmanuel",
      email: "emmanuel@gmail.com",
      address: "Lumley",
      Phone: "099349393",
      specialization: "Full Stack",
    },
    {
      id: 4,
      studentName: "Emmanuel",
      email: "emmanuel@gmail.com",
      address: "Lumley",
      Phone: "099349393",
      specialization: "Full Stack",
    },
    {
      id: 5,
      studentName: "Emmanuel",
      email: "emmanuel@gmail.com",
      address: "Lumley",
      Phone: "099349393",
      specialization: "Full Stack",
    },
    {
      id: 6,
      studentName: "Emmanuel",
      email: "emmanuel@gmail.com",
      address: "Lumley",
      Phone: "099349393",
      specialization: "Full Stack",
    },
  ];

  return (
    <Div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataGrid
          className="m-4 shadow"
          rows={rows}
          columns={cols.concat(actionColumn)}
          checkboxSelection
        />
      </div>
    </Div>
  );
};

export default Unemployed;

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
