import { configureStore } from "@reduxjs/toolkit"
import ticTacToeReducer from '../slice/ticTacToeSlice'


export default configureStore({
    reducer: {
        cells: ticTacToeReducer,
    },
})