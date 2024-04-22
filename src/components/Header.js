import * as React from 'react';
import { AppBar,Toolbar,Typography,Link,Button} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
    return ( 
        <>
         <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            SS Tours
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/home"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/about"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/tours"
              sx={{ my: 1, mx: 1.5 }}
            >
              Tours
            </Link>
          </nav>
          <Button 
          onClick={()=>{
            window.location.href="signin";
          }}
          href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
          <Button 
          onClick={()=>{
            window.location.href="signup";
          }}
          href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Sign Up
          </Button>

          <Button 
          onClick={()=>{
            window.location.href="logout";
          }}
          href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Log Out
          </Button>

        </Toolbar>
      </AppBar>
        </>
     );
}
 
export default Header;