import * as React from "react"
import Box from "@mui/material/Box"
import Cell from '../Cell/Cell'

import { useSelector, useDispatch } from "react-redux"
// import { getTodosAsync } from '../redux/todoSlice'
import { addTic } from '../../ticTacToeRedux/slices/cells/cells'

import { switchSymbols } from '../../ticTacToeRedux/slices/switchSymbols/switchSymbols'

export default function CSSGrid() {

    const cells = useSelector((state) => state.cells)
    const currentSymbol = useSelector((state) => state.switchSymbols)
    const dispatch = useDispatch()
    
    const handleCellClick = (index) => {
        dispatch(addTic({ index, value: currentSymbol }))
        dispatch(switchSymbols({}))
        console.log(`clicked  ${index}`)
    }

    return (
        <Box
            sx={{
                backgroundColor: "primary.dark",
                display: "grid",
                justifyContent: "center",
                padding: "50px",
            }}
        >
            <Box
                display="grid"
                gridTemplateColumns="repeat(3, 100px)"
                gap={1}
                gridTemplateRows="repeat(3, 100px)"
            >
                {cells.map((cell) => (
                    <Cell onClick={() => handleCellClick(cell.index)}>{cell.value}</Cell>
                ))}
            </Box>
        </Box>
    )
}
