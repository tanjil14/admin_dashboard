import "./sidebar.scss";
import SidebarCenterList from "./sidebarCenterList/SidebarCenterList.jsx"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">tanjiladmin</span>
      </div>
      <hr />
      <div className="center">
        <SidebarCenterList/>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
