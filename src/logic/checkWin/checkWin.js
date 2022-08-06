import {  any, join, includes } from "ramda"
import filterBySymbol from './filterBySymbol/filterBySymbol'
import extractIndices from './extractIndices/extractIndices'

const checkWin = side => gameSituation => winPatterns => {
    const situationForSide = join('')(extractIndices('index')(filterBySymbol('value')(side)(gameSituation)))

    return any(winPattern => includes(join('')(winPattern), situationForSide))(winPatterns)
}

export default checkWin