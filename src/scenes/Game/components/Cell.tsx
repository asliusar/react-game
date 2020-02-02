import React from 'react'
import {CELL_WIDTH} from "../../../App"

interface CellProps {
    className?: string,
    isSelected: number
}

export default ({className, isSelected}: CellProps) => {
    return (
        <td
            className={className}
            style={{
                width: CELL_WIDTH,
                height: CELL_WIDTH,
                backgroundColor: isSelected ? "black" : "white"
            }}
        >
        </td>
    )
}
