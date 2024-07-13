import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';




const Header =()=>{
    

    

    return (
        <>
         <Box sx={{ flexGrow: 1, margin:'20px' }}>
        <AppBar  position="static" color="inherit">
            <Toolbar >
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     FOODIE DELIGHT
               </Typography>
            </Toolbar>
        </AppBar>
        </Box>
        
        </>
    )


}

export default Header;