import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Grid from '@mui/material/Unstable_Grid2';

import styles from './UserNew.module.scss'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import cameraImg from '../../assets/images/camera.png'

import userAPI from '../../services/userAPI'
import useRequest from '../../hooks/useRequest'

const UserNew = () => {
    const createUser = useRequest(userAPI.createUser, { manual: true })
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: { taiKhoan: "", hoTen: "", matKhau: "", email: "", soDT: "", maLoaiNguoiDung: "" }
    })

    const onSubmit = (values) => {
        createUser.runAsync(values)
            .then(() => {
                toast.success("create user success")
                reset()
            })
            .catch(() => {
                toast.error("something went wrong, please try again")
            })
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                    <Grid xs={12} sm={12} md={4} display="flex" justifyContent="center">
                        <div className={styles.image}>
                            <img src={cameraImg} alt="" />
                            <span>No Images</span>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={12} md={8} container spacing={4}>
                        <Grid xs={12}>
                            <input type="file" />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <TextField
                                label="Username"
                                {...register("taiKhoan", {
                                    required: {
                                        value: true,
                                        message: "username is required"
                                    }
                                })}
                                error={errors.taiKhoan && errors.taiKhoan.message}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <TextField
                                label="Full Name"
                                {...register("hoTen", {
                                    required: {
                                        value: true,
                                        message: "Full Name is required"
                                    }
                                })}
                                error={errors.hoTen && errors.hoTen.message}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <TextField
                                label="Email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    }
                                })}
                                error={errors.email && errors.email.message}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <TextField
                                label="Phone Number"
                                {...register("soDT", {
                                    required: {
                                        value: true,
                                        message: "Phone Number is required"
                                    }
                                })}
                                error={errors.soDT && errors.soDT.message}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <TextField
                                label="Password"
                                {...register("matKhau", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    }
                                })}
                                error={errors.matKhau && errors.matKhau.message}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <select
                                {...register("maLoaiNguoiDung", {
                                    required: {
                                        value: true,
                                        message: "Role is required"
                                    }
                                })}
                            >
                                <option value="">Choose role</option>
                                <option value="KhachHang">Customer</option>
                                <option value="QuanTri">Admin</option>
                            </select>
                            {errors.maLoaiNguoiDung && errors.maLoaiNguoiDung.message}
                        </Grid>
                        <div className={styles.control}>
                            <Button solid primary disable>Upload</Button>
                            <Button solid primary disable={createUser.loading}>Create</Button>
                        </div>
                        {createUser.error && <p className={styles.errorMess}>{createUser.error}</p>}
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default UserNew






