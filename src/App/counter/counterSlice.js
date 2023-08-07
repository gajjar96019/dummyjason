import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    number: 0,
    value: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToCart: (state, actions) => {
            state.value.push(actions.payload)
            state.number += 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, pri } = counterSlice.actions

export default counterSlice.reducer