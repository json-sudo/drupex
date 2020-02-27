import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'


import './login.styles.scss'


class LoginPage extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        // awaiting user authentication and catching any errors if call fails
        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({ email: '', password: '' });
        } catch (error){
            console.log("user failed to sign in", error.message);
        }

    }


    render() {
        return (
            <div className="login">
                <div className="login-wrapper">
                    <h1>Log in</h1>
                    <form onSubmit={this.handleSubmit}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                required
                                id="email"
                                label="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </Grid>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{backgroundColor: '#e5446d', width: '50%', marginLeft: 'auto'}}
                        >
                            Login
                        </Button>

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Don't have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;