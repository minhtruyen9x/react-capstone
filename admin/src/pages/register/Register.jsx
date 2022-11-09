import { Link } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2';

import styles from './register.module.scss'
import logo from '../../assets/images/logo.png'
import { Button, TextField } from '../../components'

const Register = () => {
    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src={logo} alt="" width={50} />
                    <h1>Falcon</h1>
                </div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h3>Register</h3>
                        <span>or <Link to="/login" className={styles.link}>Already have an account?</Link></span>
                    </div>
                    <form action="" className={styles.form}>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <TextField label="Fisrt name" />
                            </Grid>
                            <Grid xs={6}>
                                <TextField label="Last name" />
                            </Grid>
                        </Grid>
                        <TextField label="Username" />
                        <TextField label="Email address" />
                        <TextField type='password' label="Password" />
                        <TextField type='password' label="Confirm Password" />
                        <div className={styles.control}>
                            <div className={styles.remember}>
                                <input type="checkbox" name="" id="remember" />
                                <label htmlFor='remember'>
                                    I agree with <a href="/" className={styles.link}>Terms & Conditions</a> and have understood <a href="/" className={styles.link}>Privacy Policy</a>
                                </label>
                            </div>
                        </div>
                        {/* <button className={styles.submit}>Log in</button> */}
                        <Button solid primary large >Log in</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register