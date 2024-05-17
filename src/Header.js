import React from "react";
import { Search } from "@material-ui/icons";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { useDataLayeValue } from "./DataLayer";

const Header = () => {
  const [{ user }, dispatch] = useDataLayeValue();
  return (
    <div className="header">
      <div className="header-left">
        <Search />
        <input placeholder="Search..." type="text" />
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
