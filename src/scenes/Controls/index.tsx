import React from 'react'

interface ControlsProps {
    className?: string
}

const Controls = ({className} : ControlsProps) => {
    return (
        <div className={className}>
            Controls
        </div>
    )
}

export default Controls
