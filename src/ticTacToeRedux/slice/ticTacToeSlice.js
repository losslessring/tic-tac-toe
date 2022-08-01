import { createSlice } from "@reduxjs/toolkit"

export const ticTacToeSlice = createSlice({
    name: "ticTacToe",
    initialState: [
        { index: 0, value: null },
        { index: 1, value: null },
        { index: 2, value: null },
        { index: 3, value: null },
        { index: 4, value: null },
        { index: 5, value: null },
        { index: 6, value: null },
        { index: 7, value: null },
        { index: 8, value: null },
    ],
    reducers: {
        // addTic: (state, action) => {
        //     const cellValue = {
        //         index: action.payload.index,
        //         value: null
                
        //     }
        //     return [...state, cellValue]
        // },
        addTic: (state, action) => {
            const newState = state.map((cell) => {
                if (cell.index === action.payload.index) {
                    return { ...cell, value: action.payload.value }
                } else {

                    return cell
                }
            })

            return newState
        },

	},
})

export const { addTic } = ticTacToeSlice.actions

export default ticTacToeSlice.reducer