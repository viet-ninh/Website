import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Typography, AppBar, CssBaseline, Toolbar, Container, Button, Avatar, Menu, MenuItem } from "@material-ui/core";
import useStyles from "../css/App";

import profile from "../static/images/profile.jpg";


const MyAppBar = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleMenuItemClick = () => {
        handleClose();
    }

    return(        
        <div>
            <CssBaseline />
            <Container>
                <AppBar className={classes.navbar}>
                    <Toolbar>
                    <Avatar alt="Viet Ninh" src={profile} sx={{width: 56, height: 56}}/>
                    <Typography variant='h6' style={{padding: "10px"}}>
                        Viet Ninh
                    </Typography>

                    <Button variant="contained" component={Link} to="/" style={{ margin: '8px 8px 8px 8px' }}>
                        Home
                    </Button>
                    <Button variant="contained" component={Link} to="/vsa" style={{ margin: '8px 8px 8px 8px' }}>
                        Leadership Experience
                    </Button>

                    <div>
                        <Button variant="contained" onClick={handleClick} style={{ margin: '8px 8px 8px 8px' }}>
                        Research Menu
                        </Button>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem onClick={() => handleMenuItemClick()} component={Link} to="/opportunity">
                            Research Opportunity
                        </MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick()} component={Link} to="/research">
                            Research Experience
                        </MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick()} component={Link} to="/takeaway">
                            Research Takeaway
                        </MenuItem>
                        </Menu>
                    </div>
                    </Toolbar>
                </AppBar>
            </Container>
        </div>
    );
};

export default MyAppBar;


