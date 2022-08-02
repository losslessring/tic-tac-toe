import { filter, propEq } from "ramda"

const filterBySymbol = (prop) => (symbol) => (cells) => filter(propEq(prop, symbol))(cells)

export default filterBySymbol
