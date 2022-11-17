import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import movieAPI from '../services/movieAPI'

const initialState = {
    movies: [],
    selectedMovie: {},
    loading: false,
    error: false
}

export const getMovies = createAsyncThunk(
    "movie/getMovies",
    async () => {
        try {
            const data = await movieAPI.getMovies()
            return data
        } catch (error) {
            throw error
        }
    }
)

export const getMovieDetail = createAsyncThunk(
    "movie/getMovieDetail",
    async (maPhim) => {
        try {
            const data = await movieAPI.getMovieDetail(maPhim)
            return data
        } catch (error) {
            throw error
        }
    }
)

export const deleteMovie = createAsyncThunk(
    "movie/deleteMovie",
    async (maPhim) => {
        try {
            const data = await movieAPI.deleteMovie(maPhim)
            return data
        } catch (error) {
            throw error
        }
    }
)

const movieSlice = createSlice({
    name: "movie",
    initialState,
    extraReducers: (builder) => {
        // get all movie action
        builder.addCase(getMovies.pending, (state, action) => {
            return { ...state, loading: true, error: false }
        })

        builder.addCase(getMovies.fulfilled, (state, action) => {
            return { ...state, loading: false, movies: action.payload }
        })

        builder.addCase(getMovies.rejected, (state, action) => {
            return { ...state, loading: false, error: action.error.message }
        })

        // get detail movie action
        builder.addCase(getMovieDetail.pending, (state, action) => {
            return { ...state, loading: true, error: false }
        })

        builder.addCase(getMovieDetail.fulfilled, (state, action) => {
            return { ...state, loading: false, selectedMovie: action.payload }
        })

        builder.addCase(getMovieDetail.rejected, (state, action) => {
            return { ...state, loading: false, error: action.error.message }
        })

        // delete movie action
        builder.addCase(deleteMovie.pending, (state, action) => {
            return { ...state, loading: true, error: false }
        })

        builder.addCase(deleteMovie.fulfilled, (state, action) => {
            return { ...state, loading: false }
        })

        builder.addCase(deleteMovie.rejected, (state, action) => {
            return { ...state, loading: false }
        })
    }

})

export default movieSlice.reducer