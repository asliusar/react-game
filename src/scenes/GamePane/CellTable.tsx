import React from 'react'
import {makeStyles} from "@material-ui/styles"
import Cell from "./Cell"
import {CELLS_IN_ROW} from "../../App"

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

const CellTable = () => {
    const classes = useStyles()
    const row = Array.from(Array(CELLS_IN_ROW).keys());

    return (
        <table className={classes.cellContainer}>
            <tbody>
                {row.map(trId => (
                    <tr key={trId}>
                        {row.map(tdId => (
                            <Cell
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

export default CellTable
