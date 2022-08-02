import filterBySymbol from './filterBySymbol'

const cells = [
    {
      index: 0,
      value: '〇'
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
      value: '✖'
    },
    {
      index: 4,
      value: '✖'
    },
    {
      index: 5,
      value: '〇'
    },
    {
      index: 6,
      value: '✖'
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
  

const result = [
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


it("Filter array by symbol", () => {
    expect(filterBySymbol('value')('✖')(cells)).toStrictEqual(result)
})