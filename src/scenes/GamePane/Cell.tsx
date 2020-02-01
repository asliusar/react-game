import React from 'react'
import {CELL_WIDTH} from "../../App"

interface CellProps {
    className?: string
}

export default ({className}: CellProps) => {
    return (
        <td
            className={className}
            style={{
                width: CELL_WIDTH,
                height: CELL_WIDTH,
            }}
        >
        </td>
    )
}
