import React from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    const { navBarItems } = this.props;

    return (
      <>
        <div className="col-lg-4 col-md-12 rightSidebar">
          <div className="all_services">
            <ul>
              {navBarItems.map(({ label, route }, idx) => (
                <li key={idx}>
                  <NavLink to={route}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;
