import GameEngine, {calculateNeighbours} from './../GameEngine'

const table = [
    [0, 0, 0 ,0 ,0],
    [0, 0, 1 ,0 ,0],
    [0, 0, 1 ,0 ,0],
    [0, 0, 1 ,0 ,0],
    [0, 0, 0 ,0 ,0],
]

test('Any live cell with fewer than two live neighbours dies', () => {
    const input = [
        [0, 0, 0 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 0 ,0 ,0],
    ]
    const output = [
        [0, 0, 0 ,0 ,0],
        [0, 0, 0 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 0 ,0 ,0],
        [0, 0, 0 ,0 ,0],
    ]

    expect(GameEngine.mutateCells(input)).toEqual(output)
})

test('test calculateNeighbours', () => {
    const input = [
        [0, 0, 0 ,0 ,1],
        [0, 0, 1 ,0 ,0],
        [0, 0, 0 ,0 ,1],
        [0, 0, 1 ,0 ,0],
        [0, 0, 0 ,0 ,0],
    ]

    expect(calculateNeighbours(2,2, input)).toEqual(2)
    expect(calculateNeighbours(1,1, input)).toEqual(1)
    expect(calculateNeighbours(3,3, input)).toEqual(2)
    expect(calculateNeighbours(0,0, input)).toEqual(1)
    expect(calculateNeighbours(4,0, input)).toEqual(1)
    expect(calculateNeighbours(1,2, input)).toEqual(0)
})
