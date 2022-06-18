import { DataGrid } from "@mui/x-data-grid";
import {Link} from "react-router-dom"
import { userColumns, userRows } from "../.././datatablesource";
import "./dataTable.scss";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
           <Link to="/users/view" style={{textDecoration:"none"}}> <div className="viewButton">View</div></Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
        Add New</Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
