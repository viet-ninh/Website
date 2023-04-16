import "../css/Navigation.css";
import { AppBar } from "@mui/material/AppBar"

function NavigationBar(){
  return(
    <div className="navigation">
      <AppBar position="static" color="primary" enableColorOnDark>
      </AppBar>
    </div>
  );
}

export default NavigationBar;