import React from 'react';
import { Avatar, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Button from '@material-ui/core/Button';



function Login() {
    const paperStyle = {padding:20, height:'70vh', width:280, margin:'20px auto'}
    const avatarStyle = {backgroundColor:'#B91646'}
    const btnStyle = {margin:'8px 0'}



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
                    <Link>
                     Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;
