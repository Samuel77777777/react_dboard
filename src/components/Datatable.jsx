import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import Add from "./add";
import React from "react";
import download from "../assets/download.jpg";
import { useState } from "react";
import styled from "styled-components";
import { Modal, Button } from "semantic-ui-react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Update from "./update";

const Datatable = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  //row
  const [data, setData] = useState(userRows);

  // function for the delete button
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  //modal button
  const [open, setOpen] = React.useState(false);

  //header for action buttons
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* update button */}
            <div className="">
              {/* modal update button */}
              <Update />
            </div>
            <div>
              {/* delete button modal */}

              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button className="deleteButton">Delete</Button>}
                style={{
                  borderRadius: 5,
                  width: 400,
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Modal.Header>Delete Your Account</Modal.Header>
                <Modal.Content>
                  <p>Are you sure you want to delete your account</p>
                </Modal.Content>
                <Modal.Actions>
                  {/* function for close modal button */}

                  <Button onClick={() => setOpen(false)} negative>
                    No
                  </Button>
                  <Button onClick={() => handleDelete(params.row.id)} positive>
                    Yes
                  </Button>
                </Modal.Actions>
              </Modal>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <Div className="datatable">
      <div className="datatableTitle">
        {/* add new user button */}
        Add New User
        <div className="m-2">
          {/* modal button to Add new user */}

          <Add />
        </div>
      </div>

      {/* datagrids, finally the table him self */}

      <DataGrid
        className="datagrid shadow"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </Div>
  );
};

export default Datatable;

const Div = styled.div`
  height: 600px;
  padding: 20px;

  .datatableTitle {
    width: 100%;
    font-size: 24px;
    color: gray;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .link {
      color: white;
      text-decoration: none;
      background-color: green;
      font-size: 16px;
      font-weight: 400;
      border: 1px solid green;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .cellWithImg {
    display: flex;
    align-items: center;

    .cellImg {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 20px;
    }
  }

  .cellAction {
    display: flex;
    align-items: center;
    gap: 15px;

    .viewButton {
      border-radius: 15px;
      color: white;
      padding: 15px;
      border-radius: 10px;
      background-color: #0096ff;
      cursor: pointer;
    }

    .deleteButton {
      border-radius: 10px;
      color: white;
      padding: 15px;
      border-radius: 10px;
      background-color: crimson;
      cursor: pointer;
    }
  }
`;
