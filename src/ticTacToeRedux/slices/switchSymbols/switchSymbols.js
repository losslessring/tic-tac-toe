import { createSlice } from "@reduxjs/toolkit"

export const switchSymbolsSlice = createSlice({
    name: "switchSymbol",
    initialState: 'x',
    reducers: {
        switchSymbols: (currentSymbol, _) => {
            return currentSymbol === 'x' ? 'o' : 'x'
        },
    },
})

export const { switchSymbols } = switchSymbolsSlice.actions

export default switchSymbolsSlice.reducer
