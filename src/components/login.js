import React from 'react';
import { Avatar, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Button from '@material-ui/core/Button';



function Login() {
    const paperStyle = {padding:20, height:'70vh', width:280, margin:'20px auto'}
    const avatarStyle = {backgroundColor:'#B91646'}
    const btnStyle = {margin:'8px 0'}
    const button_style = {cursor:'pointer'}
    const hrStyle = {padding: 30}
    const iconStyle = {padding:10, marginLeft: 30, cursor: 'pointer'}
    const span1 = {marginLeft:'10px'}
    const span2 = {marginLeft:'10px'}



    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOpenOutlinedIcon />
                    </Avatar>
                    <h2>Login</h2>
                </Grid>

                <TextField label='Email' placeholder='Enter Email Address' fullWidth required/>
                <TextField label='Password' placeholder='Enter Your Password' type='password' fullWidth required/>

                <FormControlLabel
                    control={
                    <Checkbox
                    name="checkedB"
                    color="Secondary"
                    />
                    }
                    label="Remember me"
                />

                <Button type='submit' color='secondary' fullWidth variant="contained" style={btnStyle}>Login</Button>

                <Typography>
                    <Link href="#">
                    Forgot password
                    </Link>
                </Typography>
                <Typography> Do you have an account?
                    <Link href="/signup" style={button_style}>
                     Sign Up
                    </Link>
                </Typography>
                
                <div style={hrStyle}>
                    <hr width="60%" />
                    <div style={iconStyle}>
                        <span><img src="./images/google.png" height="30" width="30" alt="google-icon" /></span>
                        <span style={span1}><img src="./images/facebook.png" height="30" width="30" alt="facebook-icon" /></span>
                        <span style={span2}><img src="./images/github.png" height="30" width="30"alt="github-icon" /></span>
                    </div>
                </div>

                
            </Paper>
        </Grid>
    )
}

export default Login;
