import extractIndices from './extractIndices'

const cells = [
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
      value: '✖'
    },
    {
      index: 4,
      value: '✖'
    },
    {
      index: 6,
      value: '✖'
    }
]

const result = [1, 2, 3, 4, 6]

it("Extract indices from array", () => {
    expect(extractIndices('index')(cells)).toStrictEqual(result)
})
