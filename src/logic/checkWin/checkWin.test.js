import checkWin from './checkWin'
import winPatterns from './winPatterns/winPatterns'

const cells = [
    {
      index: 0,
      value: '✖'
    },
    {
      index: 1,
      value: '✖'
    },
    {
      index: 2,
      value: '✖'
    },
    {
      index: 3,
      value: '〇'
    },
    {
      index: 4,
      value: '〇'
    },
    {
      index: 5,
      value: '〇'
    },
    {
      index: 6,
      value: '〇'
    },
    {
      index: 7,
      value: '〇'
    },
    {
      index: 8,
      value: '〇'
    }
]

const resultX = true
const resultO = true

it("Check win for ✖", () => {
    expect(checkWin('✖')(cells)(winPatterns)).toStrictEqual(resultX)
})

it("Check win for 〇", () => {
    expect(checkWin('〇')(cells)(winPatterns)).toStrictEqual(resultO)
})