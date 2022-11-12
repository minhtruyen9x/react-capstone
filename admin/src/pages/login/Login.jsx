import { Link, useLocation } from 'react-router-dom'
import RotateRightIcon from '@mui/icons-material/RotateRight';

import styles from './login.module.scss'
import { Logo } from '../../components/SVG'
import Button from '../../components/Button'
import TextField from '../../components/TextField'

import { Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../../slices/authSlice"

const Login = () => {
    const dispatch = useDispatch()
    const { state } = useLocation()
    const { error, loading, user } = useSelector(state => state.auth)

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: { taiKhoan: "", matKhau: "" }
    })

    const onSubmit = (values) => {
        dispatch(login(values))
    }

    if (state) {
        for (const [key, value] of Object.entries(state)) {
            setValue(key, value)
        }
    }

    if (user) {
        return <Navigate to="/admin" replace />
    }

    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Logo width={50} height={50} />
                    <h1>Welcome</h1>
                </div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h3>Login</h3>
                        <span>or <Link to="/register" className={styles.link}>Create an account</Link></span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <TextField
                            label="username"
                            {...register("taiKhoan", {
                                required: {
                                    value: true,
                                    message: "username is required"
                                }
                            })}

                            error={errors.taiKhoan && errors.taiKhoan.message}
                        />
                        <TextField
                            label="password"
                            {...register("matKhau", {
                                required: {
                                    value: true,
                                    message: "password is required"
                                }
                            })}
                            error={errors.matKhau && errors.matKhau.message}
                        />
                        <div className={styles.control}>
                            <div className={styles.remember}>
                                <input type="checkbox" name="" id="remember" />
                                <label htmlFor='remember'>Remember me</label>
                            </div>
                            <a href="/" className={styles.link}>Forgot Password?</a>
                        </div>
                        {error && <p className={styles.errorMess}>{error}</p>}
                        <Button solid primary large disable={loading} rightIcon={loading && <RotateRightIcon />}>
                            Log in
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login