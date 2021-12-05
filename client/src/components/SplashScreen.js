import { useContext } from 'react';
import AuthContext from '../auth'

import Copyright from './Copyright'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function SplashScreen() {

    const handleCreateAnAccount = (event) => {
        event.preventDefault();
        window.location.href="http://localhost:3000/register/";
    };

    const handleLoginScreen = (event) => {
        event.preventDefault();
        window.location.href="http://localhost:3000/login/";
    };

    const handleGuestScreen = (event) => {
        event.preventDefault();
        window.location.href="http://localhost:3000/community/";
    };
    


    return (
        <div id="welcome-screen">
            Welcome to the Top 5 Lister!
            <div id="welcome-screen-text">
                Here you can create epic lists showcasing things that you love along with 
                <br/> viewing the lists of your friends. Create an account to start creating your very <br/> 
                own list today and gain the opportunity to contribute to our community 
                <br/>lists!
            </div>
            
            <div id="welcome-screen-buttons">
                <Button
                    type="submit"
                    onClick={handleCreateAnAccount}
                    variant="contained"
                    style={{maxWidth: '190px', maxHeight: '50px', minWidth: '180px', minHeight: '50px'}}
                >
                    Create an Account
                </Button>
                <Button
                   type="submit"
                   onClick={handleLoginScreen}
                   variant="contained"
                   style={{maxWidth: '190px', maxHeight: '50px', minWidth: '180px', minHeight: '50px'}}
                >
                    Login
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    onClick={handleGuestScreen}
                    style={{maxWidth: '190px', maxHeight: '50px', minWidth: '180px', minHeight: '50px'}}
                >
                    Continue as Guest
                </Button>
            </div>

            <div id="welcome-screen-cp">
                This site was created by Ishan Arefin. 2021. All rights reserved.
            </div>
        </div>
    )
}