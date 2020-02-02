import GameEngine, {
    calculateNeighbours,
    mutateDeadCells,
    mutateOvercrowding, mutateReproduction,
    mutateUnderpopulation
} from './../GameEngine'

test('test cell mutation example 1', () => {
    const input = [
        [0, 0, 0 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 0 ,0 ,0],
    ]

    const result = [
        [0, 0, 0 ,0 ,0],
        [0, 0, 0 ,0 ,0],
        [0, 1, 1 ,1 ,0],
        [0, 0, 0 ,0 ,0],
        [0, 0, 0 ,0 ,0],
    ]

    expect(GameEngine.mutateCells(input)).toEqual(result)
})

test('Any live cell with fewer than two live neighbours dies', () => {
    const input = [
        [0, 0, 0 ,0 ,0],
        [0, 0, 0 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 0 ,0 ,0],
        [0, 0, 0 ,0 ,0],
    ]

    expect(mutateUnderpopulation(2, 2, input)).toEqual(0)
})

test('Any live cell with two or three live neighbours lives on to the next generation', () => {
    const input = [
        [0, 0, 0 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 0 ,0 ,0],
    ]

    expect(mutateDeadCells(2, 2, input)).toEqual(1)
})

test('Any live cell with more than three live neighbours dies (overcrowding).', () => {
    const input = [
        [0, 0, 0 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 1, 1 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 0 ,0 ,0],
    ]

    expect(mutateOvercrowding(2, 2, input)).toEqual(0)
})

test('Any dead cell with exactly three live neighbours becomes a live cell (reproduction).', () => {
    const input = [
        [0, 0, 0 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 1, 0 ,0 ,0],
        [0, 0, 1 ,0 ,0],
        [0, 0, 0 ,0 ,0],
    ]

    expect(mutateReproduction(2, 2, input)).toEqual(1)
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
