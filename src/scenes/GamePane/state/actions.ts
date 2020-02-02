export const ACTION = {
    MUTATE_CELLS: "MUTATE_CELLS",
}

let timer: any;

export const startCellMutation = () => (dispatch: any) => {
    timer = setInterval(() => {
        mutateCells(dispatch)
    }, 400)
}

export const stopCellMutation = () => () => {
    clearInterval(timer)
}

const mutateCells = (dispatch: any) => {
    dispatch({
        type: ACTION.MUTATE_CELLS
    })
}
