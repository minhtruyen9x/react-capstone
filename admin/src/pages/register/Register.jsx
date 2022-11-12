import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Grid from '@mui/material/Unstable_Grid2';


import styles from './register.module.scss'
import { Logo } from '../../components/SVG'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import authAPI from '../../services/authAPI'
import { useState } from 'react';
// "taiKhoan": "string",
//   "matKhau": "string",
//   "email": "string",
//   "soDt": "string",
//   "hoTen": "string"

const Register = () => {
    const navigate = useNavigate()
    const [status, setStatus] = useState({ loading: false, error: false })

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: { taiKhoan: "", matKhau: "", email: "", soDt: "", fisrtName: "", lastName: "", confirmPass: "" }
    })

    const onSubmit = async (values) => {
        setStatus(prev => ({ ...prev, loading: true, error: false }))
        try {
            await authAPI.register({ ...values, hoTen: values.fisrtName + " " + values.lastName })
            navigate('/login', { state: "Register account successfully" })

        } catch (error) {
            setStatus(prev => ({ ...prev, loading: false, error: error }))
        }
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
                        <h3>Register</h3>
                        <span>
                            or <Link to="/login" className={styles.link}>Already have an account?</Link>
                        </span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <Grid container spacing={2}>
                            <Grid xs={6} display="flex" flexDirection="column" gap={2}>
                                <TextField
                                    label="Fisrt name"
                                    {...register("fisrtName", {
                                        required: {
                                            value: true,
                                            message: "Fisrt name is required"
                                        }
                                    })}
                                    error={errors.fisrtName && errors.fisrtName.message}
                                />
                            </Grid>
                            <Grid xs={6} display="flex" flexDirection="column" gap={2}>
                                <TextField
                                    label="Last Name"
                                    {...register("lastName", {
                                        required: {
                                            value: true,
                                            message: "Last name is required"
                                        }
                                    })}
                                    error={errors.lastName && errors.lastName.message}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            label="Username"
                            {...register("taiKhoan", {
                                required: {
                                    value: true,
                                    message: "Username is required"
                                }
                            })}
                            error={errors.taiKhoan && errors.taiKhoan.message}
                        />
                        <TextField
                            type='password'
                            label="Password"
                            {...register("matKhau", {
                                required: {
                                    value: true,
                                    message: "password is required"
                                }
                            })}
                            error={errors.matKhau && errors.matKhau.message}
                        />
                        <TextField
                            label="Email address"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email address is required"
                                }
                            })}
                            error={errors.email && errors.email.message}
                        />
                        <TextField
                            type='password'
                            label="Confirm Password"
                            {...register("confirmPass", {
                                validate: (value) => {
                                    if (value !== watch("matKhau")) {
                                        return "Your passwords do no match"
                                    }
                                }
                            })}
                            error={errors.confirmPass && errors.confirmPass.message}
                        />
                        <div className={styles.control}>
                            <div className={styles.remember}>
                                <input type="checkbox" name="" id="remember" />
                                <label htmlFor='remember'>
                                    I agree with <a href="/" className={styles.link}>Terms & Conditions</a> and have understood <a href="/" className={styles.link}>Privacy Policy</a>
                                </label>
                            </div>
                        </div>
                        {status.error && <p className={styles.errorMess}>{status.error}</p>}
                        <Button solid primary large >Register</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register