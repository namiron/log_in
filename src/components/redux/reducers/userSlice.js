import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL_USERS } from '../../common/constants';


export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL_USERS}`)
            if (!response.ok) {
                throw Error('Server error')
            }
            const data = response.json()
            console.log('user:', data);
            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const createUsersOnServer = createAsyncThunk(
    'users/createUsersOnServer',
    async (createUser, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL_USERS}`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(createUser)
            })
            if (!response.ok) {
                throw Error('Server error')

            }
            const data = await response.json()
            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const userSlice = createSlice({
    name: 'users',
    initialState: {
        status: null,
        users: [],
        errors: null
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUsers.pending, (state) => {
            state.status = 'loading'
            state.errors = null
        })
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                state.status = 'fulfilled'
                state.users = payload
                state.errors = null
            })
            .addCase(getUsers.rejected, (state, { payload }) => {
                state.status = 'errors'
                state.errors = payload
            })
    }
})



export default userSlice.reducer