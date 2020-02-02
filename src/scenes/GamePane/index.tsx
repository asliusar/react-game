import React from 'react'
import CellTable from "./components/CellTable"
import GameHeader from "./components/GameHeader"
import {selectCells} from "./state/selector"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {startCellMutation} from "./state/actions"

interface GamePaneProps {
    className?: string,
    startCellMutation: () => void
}

const GamePane = ({className, startCellMutation}: GamePaneProps) => {
    React.useEffect(() => {
        startCellMutation()
    }, [])

    return (
        <div className={className}>
            <GameHeader />
            <CellTable />
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators({
        startCellMutation
    }, dispatch)
})


export default connect(null, mapDispatchToProps)(GamePane)
