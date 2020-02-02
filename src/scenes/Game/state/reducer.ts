import {ACTION} from './actions'
import GameEngine from './../engine/GameEngine'

interface Store {
    cells: Array<Array<number>>,
    isPaused: boolean
}

export const NUMBER_OF_CELLS = 121

const initState = {
    isPaused: true,
    cells: new Array(Math.sqrt(NUMBER_OF_CELLS)).fill(new Array(Math.sqrt(NUMBER_OF_CELLS)).fill(0))
} as Store

export default (state = initState, action: any) => {
    switch (action.type) {
        case ACTION.MUTATE_CELLS:
            return {
                ...state,
                cells: GameEngine.mutateCells(state.cells)
            }

        case ACTION.TOGGLE_GAME:
            return {
                ...state,
                isPaused: action.value
            }
        case ACTION.TOGGLE_CELL:
            return {
                ...state,
                cells: GameEngine.toggleCell(action.i, action.j, state.cells)
            }
        default:
            return state;
    }
}
