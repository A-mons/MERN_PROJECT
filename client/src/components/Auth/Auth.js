import React, { useState } from 'react'
import {GoogleLogin} from 'react-google-login'
import { Button, Typography, Paper, Grid, Avatar, Container } from '@material-ui/core'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {useDispatch} from 'react-redux'
import Input from './Input'
import Icon from './icon'
import { useHistory } from 'react-router-dom';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const googleSucess = async (res) => {
        
        const result = res?.profileObj;
        const token = res?.tokenId;
        
        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/');
        } catch (error) {
            console.log(error);
            
        }
    }
    const googleFailure = (error) => {
        console.log('Unsuccessful Google Sign In !')
        console.log(error);
    }

    const handleSubmit = () => {
        
    };
    const handleChange = () => {
        
    };
    const handleShowPassword = () => setShowPassword(() => !showPassword);
    const signMode = () => setIsSignup(() => !isSignup);
    
    return (
        <Container component="main" maxWidth='xs' >
            <Paper className={classes.paper} elevation={10}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'> {isSignup ? 'Sign Up' : 'Sign In'} </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" type="email" handleChange={handleChange} />
                        <Input name="password" label="Password" type={showPassword ? "text" : "password"} handleChange={handleChange} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="PasswordConfirmation" label="Confirm Password" type="password" handleChange={handleChange} /> }
                    </Grid>
                    <Button className={classes.submit} type="submit" variant="contained" color="primary" fullWidth >
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId="GOOGLE_ID"
                        render={(renderProps) => (
                            <Button className= {classes.googleButton} color='secondary' variant='contained' onClick={renderProps.onClick}  disabled={renderProps.disabled} startIcon={<Icon />} fullWidth >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSucess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Button onClick={signMode} >
                                {isSignup? "already have an account? Sign In" : "don't have an account ? Sign Up"}
                            </Button>

                        </Grid>
                    </Grid>

                </form>

            </Paper>
            
        </Container>
    )
}

export default Auth
