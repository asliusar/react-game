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

            return accY + array[calculateIndex(i + x)][calculateIndex(j + y)]
        }, 0)
    }, 0)
}

const cloneArray = (array: Array<Array<number>>) => array.map(function (arr) {
    return arr.slice()
})

export const mutateUnderpopulation = (
    neighbours: number
): number => {
    return neighbours < 2 ? 0 : 1
}

export const mutateDeadCells = (
    neighbours: number
): number => {
    return 1 < neighbours && neighbours < 5 ? 1 : 0
}

export const mutateOvercrowding = (
    neighbours: number
): number => {
    return neighbours > 3 ? 0 : 1
}

export const mutateReproduction = (
    neighbours: number
): number => {
    return neighbours === 3 ? 1 : 0
}

const mutateCells = (cells: Array<Array<number>>): Array<Array<number>> => {
    let nextGenCells = cloneArray(cells)

    for (let i = 0; i < cells.length; i++) {
        for (let j = 0; j < cells[i].length; j++) {
            let neighbours = calculateNeighbours(i, j, cells);

            if (!cells[i][j]) {
                nextGenCells[i][j] = mutateReproduction(neighbours)
            } else {
                nextGenCells[i][j] = mutateUnderpopulation(neighbours)
                    && mutateDeadCells(neighbours)
                    && mutateOvercrowding(neighbours)
            }
        }
    }

    return nextGenCells
}

const toggleCell = (
    i: number, j: number, cells: Array<Array<number>>
): Array<Array<number>> => {
    let nextGenCells = cloneArray(cells)
    nextGenCells[i][j] = Number(!cells[i][j])

    return nextGenCells
}

export default {
    mutateCells,
    toggleCell
}
