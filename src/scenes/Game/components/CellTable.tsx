import React from 'react'
import {makeStyles} from "@material-ui/styles"
import Cell from "./Cell"
import {NUMBER_OF_CELLS} from "../state/reducer"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {selectCells} from "../state/selector"

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

interface CellTableProps {
    cells: Array<Array<number>>
}

const CellTable = ({cells}: CellTableProps) => {
    const classes = useStyles()
    return (
        <table className={classes.cellContainer}>
            <tbody>
                {cells.map((row, trId) => (
                    <tr key={trId}>
                        {row.map((cell, tdId) => (
                            <Cell
                                isSelected={cell}
                                key={trId * 10 + tdId}
                                className={classes.cell}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state: any) => ({
    cells: selectCells(state)
})

export default connect(mapStateToProps)(CellTable)
