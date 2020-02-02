export interface GameCell {
    isSelected: boolean,
    isDead: boolean,
    x: number,
    y: number
}

export const calculateNeighbours = (
    i: number, j: number, array: Array<Array<number>>
): number => {
    const calculateIndex = (index: number): number => index < 0
        ? (array.length) + index
        : (index > array.length - 1)
            ? index % (array.length)
            : index

    return [-1, 0, 1].reduce((accX: number, x: number) => {
        return accX + [-1, 0, 1].reduce((accY: number, y: number) => {
            if (x === 0 && y === 0) return accY
            // console.log(i, x, calculateIndex(i + x))
            // console.log(j, y, calculateIndex(j + y))
            // console.log(array[calculateIndex(i + x)][calculateIndex(j + y)])
            // console.log("---------")
            return accY + array[calculateIndex(i + x)][calculateIndex(j + y)]
        }, 0)
    }, 0)
}

const cloneArray = (array: Array<Array<number>>) => array.map(function (arr) {
    return arr.slice()
})

const mutateUnderpopulation = (
    i: number, j: number, cells: Array<Array<number>>
): number => {
    if (!cells[i][j]) return 0
    // console.log(i, j)
    // console.log(calculateNeighbours(i, j, cells))
    return calculateNeighbours(i, j, cells) < 2 ? 0 : 1
}

const mutateCells = (cells: Array<Array<number>>): Array<Array<number>> => {
    let nextGenCells = cloneArray(cells)
    for (let i = 0; i < cells.length; i++) {
        for (let j = 0; j < cells[i].length; j++) {
            nextGenCells[i][j] = mutateUnderpopulation(i, j, cells)
        }
    }

    return nextGenCells
}

export default {
    mutateCells
}
