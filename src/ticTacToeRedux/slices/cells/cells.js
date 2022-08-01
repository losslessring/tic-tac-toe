import { createSlice } from "@reduxjs/toolkit"

export const cellsSlice = createSlice({
    name: "cells",
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
        addTic: (cells, action) => {
            return cells.map((cell) => {

                return cell.index === action.payload.index
                    ? { ...cell, value: action.payload.value }
                    : cell
            })
        },
    },
})

export const { addTic } = cellsSlice.actions

export default cellsSlice.reducer
