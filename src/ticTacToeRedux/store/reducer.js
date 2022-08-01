import { combineReducers } from "@reduxjs/toolkit"

import cellsReducer from '../slices/cells/cells'
import switchSymbols from '../slices/switchSymbols/switchSymbols'

export default combineReducers({
    cells: cellsReducer,
    switchSymbols: switchSymbols

})