import React from 'react'
import CellTable from "./CellTable"
import GameHeader from "./GameHeader"

interface GamePaneProps {
    className?: string
}

const GamePane = ({className}: GamePaneProps) => {

    return (
        <div className={className}>
            <GameHeader />
            <CellTable />
        </div>
    )
}

export default GamePane
