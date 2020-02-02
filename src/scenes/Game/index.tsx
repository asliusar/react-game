import React from 'react'
import {makeStyles} from "@material-ui/styles"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Cell from './Cell'
import {selectCells, selectIsPaused} from "./state/selector"
import {toggleCell} from "./state/actions"

const useStyles = makeStyles({
    cellContainer: {
        borderCollapse: 'collapse',
        outline: '2px solid #000000'
    },
    cell: {
        border: '1px solid #000000'
    },
    activeCell: {
        backgroundColor: '#000000'
    }
})

interface GameProps {
    className?: string
    cells: Array<Array<number>>,
    isPaused: boolean,
    toggleCell: (i: number, j: number) => void
}

const Game = ({cells, isPaused, toggleCell, className}: GameProps) => {
    const classes = useStyles()
    return (
        <table className={`${className} ${classes.cellContainer}`}>
            <tbody>
            {cells.map((row, trId) => (
                <tr key={trId}>
                    {row.map((cell, tdId) => (
                        <Cell
                            key={trId * 10 + tdId}
                            className={classes.cell}
                            isSelected={cell}
                            onClick={() => isPaused && toggleCell(trId, tdId)}
                        />
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state: any) => ({
    cells: selectCells(state),
    isPaused: selectIsPaused(state)
})

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators({
        toggleCell
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)

