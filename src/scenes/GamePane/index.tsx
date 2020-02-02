import React from 'react'
import CellTable from "./components/CellTable"
import GameHeader from "./components/GameHeader"

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
