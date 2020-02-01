import React from 'react'

interface GamePaneProps {
    className?: string
}

const GamePane = ({className} : GamePaneProps) => {
    return (
        <div className={className}>
            Game Pane
        </div>
    )
}

export default GamePane
