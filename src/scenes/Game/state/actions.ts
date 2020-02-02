export const ACTION = {
    MUTATE_CELLS: "MUTATE_CELLS",
    TOGGLE_GAME: "TOGGLE_GAME",
    TOGGLE_CELL: "TOGGLE_CELL"
}

let timer: any

const mutateCells = {
    type: ACTION.MUTATE_CELLS
}

const toggleGame = (isPaused: boolean) => ({
    type: ACTION.TOGGLE_GAME,
    value: isPaused
})

export const startCellMutation = () => (dispatch: any) => {
    clearInterval(timer)
    dispatch(toggleGame(false))

    timer = setInterval(() => {
        dispatch(mutateCells)
    }, 400)
}

export const stopCellMutation = () => (dispatch: any) => {
    clearInterval(timer)
    dispatch(toggleGame(true))
}


export const toggleCell = (i: number, j: number) => (dispatch: any) => {
    dispatch({
        type: ACTION.TOGGLE_CELL,
        i, j
    })
}

