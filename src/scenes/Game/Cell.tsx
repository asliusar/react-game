import React from 'react'
import {CELL_WIDTH} from "../../App"

interface CellProps {
    className?: string,
    isSelected: number,
    onClick: () => void
}

export default ({className, isSelected, onClick}: CellProps) => {
    return (
        <td
            className={className}
            style={{
                width: CELL_WIDTH,
                height: CELL_WIDTH,
                backgroundColor: isSelected ? "black" : "white"
            }}
            onClick={onClick}
        >
        </td>
    )
}
