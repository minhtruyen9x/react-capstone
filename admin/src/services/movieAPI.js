import fetcher from './fetcher'


const movieAPI = {
    getBanners: () => {
        return fetcher("/QuanLyPhim/LayDanhSachBanner")
    },

    getMovieDetail: (maPhim) => {
        return fetcher("/QuanLyPhim/LayDanhSachPhim", {
            params: {
                maPhim
            }
        })
    },

    getMovies: () => {
        return fetcher("/QuanLyPhim/LayDanhSachPhim")
    },

    getMoviesPagination: ({ ...values }) => {
        return fetcher("/QuanLyPhim/LayDanhSachPhimPhanTrang", {
            params: {
                maNhom: "GP15",
                ...values
            }
        })
    },

    getMovieByDay: ({ ...values }) => {
        return fetcher("/QuanLyPhim/LayDanhSachPhimTheoNgay", {
            params: {
                maNhom: "GP15",
                ...values
            }
        })
    },

    createMovie: ({ ...values }) => {
        return fetcher.post("/QuanLyPhim/ThemPhimUploadHinh", values)
    },

    updateMovie: ({ ...values }) => {
        return fetcher.post("/QuanLyPhim/CapNhatPhimUpload", values)
    },

    deleteMovie: (maPhim) => {
        return fetcher.delete("/QuanLyPhim/XoaPhim", {
            params: {
                maPhim
            }
        })
    },
}

export default movieAPI