import fetcher from './fetcher'


const theaterAPI = {
    getTheaterCenters: (maHeThongRap) => {
        return fetcher("/QuanLyRap/LayThongTinHeThongRap", {
            params: {
                maHeThongRap
            }
        })
    },

    getTheater: (maHeThongRap) => {
        return fetcher("/QuanLyRap/LayThongTinCumRapTheoHeThong", {
            params: {
                maHeThongRap
            }
        })
    },

    getTheaterSchedule: (maHeThongRap) => {
        return fetcher("/QuanLyRap/LayThongTinCumRapTheoHeThong", {
            params: {
                maNhom: "GP15",
                maHeThongRap
            }
        })
    },

    getMovieSchedule: (MaPhim) => {
        return fetcher("/QuanLyRap/LayThongTinLichChieuPhim", {
            params: {
                MaPhim
            }
        })
    },
}

export default theaterAPI