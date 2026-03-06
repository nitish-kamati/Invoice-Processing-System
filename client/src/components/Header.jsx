import { AppBar, Toolbar } from "@mui/material";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <AppBar color = "primary" position="static">
      <Toolbar>
        <img src={logo} alt="logo" style={{ height: "60px", marginRight: "10px" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;