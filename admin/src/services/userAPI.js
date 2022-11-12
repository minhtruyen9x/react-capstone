import fetcher from './fetcher'
import localService from './localService'

const userAPI = {
    getTypeUsers: () => {
        return fetcher("/QuanLyNguoiDung/LayDanhSachNguoiDung")
    },

    getUsers: (tuKhoa) => {
        return fetcher("/QuanLyNguoiDung/LayDanhSachNguoiDung", {
            params: {
                maNhom: "GP15",
                tuKhoa: tuKhoa
            }
        })
    },

    getUsersPagination: ({ tuKhoa, soTrang, soPhanTuTrenTrang }) => {
        return fetcher("/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang", {
            params: {
                maNhom: "GP15",
                tuKhoa,
                soTrang,
                soPhanTuTrenTrang
            }
        })
    },

    getUserByKey: (tuKhoa) => {
        return fetcher("/QuanLyNguoiDung/LayDanhSachNguoiDung", {
            params: {
                maNhom: "GP15",
                tuKhoa: tuKhoa
            }
        })
    },

    getUsersPaginationByKey: ({ tuKhoa, soTrang, soPhanTuTrenTrang }) => {
        return fetcher("/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang", {
            params: {
                maNhom: "GP15",
                tuKhoa,
                soTrang,
                soPhanTuTrenTrang
            }
        })
    },

    getUserInfoPublic: () => {
        return fetcher.post("/QuanLyNguoiDung/ThongTinTaiKhoan")
    },

    getUserInfo: (taiKhoan, token) => {
        return fetcher.post("/QuanLyNguoiDung/LayThongTinNguoiDung", null, {
            headers: {
                Authorization: token ? `Bearer ${token}` : `Bearer ${localService.user.get()?.accessToken}`
            },
            params: {
                taiKhoan
            }
        })
    },

    createUser: (values) => {
        return fetcher.post("/QuanLyNguoiDung/ThemNguoiDung", values)
    },

    updateUser: (values) => {
        return fetcher.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values)
    },

    deleteUser: (taiKhoan) => {
        return fetcher.delete("/QuanLyNguoiDung/XoaNguoiDung", {
            params: {
                taiKhoan
            }
        })
    },
}

export default userAPI