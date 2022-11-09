import { Link } from 'react-router-dom'

import styles from './login.module.scss'
import logo from '../../assets/images/logo.png'
import { Button, TextField } from '../../components'

console.log()
const Login = () => {
    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src={logo} alt="" width={50} />
                    <h1>Falcon</h1>
                </div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h3>Login</h3>
                        <span>or <Link to="/register" className={styles.link}>Create an account</Link></span>
                    </div>
                    <form action="" className={styles.form}>
                        <TextField label="username" />
                        <TextField label="password" />
                        <div className={styles.control}>
                            <div className={styles.remember}>
                                <input type="checkbox" name="" id="remember" />
                                <label htmlFor='remember'>Remember me</label>
                            </div>
                            <a href="/" className={styles.link}>Forgot Password?</a>
                        </div>
                        {/* <button className={styles.submit}>Log in</button> */}
                        <Button solid primary large >Log in</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login