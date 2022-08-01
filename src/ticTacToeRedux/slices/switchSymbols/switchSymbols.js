import { createSlice } from "@reduxjs/toolkit"

export const switchSymbolsSlice = createSlice({
    name: "switchSymbol",
    initialState: '×',
    reducers: {
        switchSymbols: (currentSymbol, _) => {
            return currentSymbol === '×' ? '○' : '×'
        },
    },
})

export const { switchSymbols } = switchSymbolsSlice.actions

export default switchSymbolsSlice.reducer
