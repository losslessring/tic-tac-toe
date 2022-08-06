import { map } from "ramda"

const extractIndices = prop => arr => map(obj => obj[prop])(arr)

export default extractIndices