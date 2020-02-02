export const ACTION = {
    MUTATE_CELLS: "MUTATE_CELLS",
    TOGGLE_GAME: "TOGGLE_GAME"
}

let timer: any

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

const mutateCells = {
    type: ACTION.MUTATE_CELLS
}

const toggleGame = (isPaused: boolean) => ({
    type: ACTION.TOGGLE_GAME,
    value: isPaused
})
