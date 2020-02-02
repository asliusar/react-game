import React from 'react'
import CellTable from "./components/CellTable"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {startCellMutation} from "./state/actions"

interface GamePaneProps {
    className?: string,
    startCellMutation: () => void
}

const Game = ({className, startCellMutation}: GamePaneProps) => {
    React.useEffect(() => {
        startCellMutation()
    }, [])

    return (
        <div className={className}>
            <CellTable/>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators({
        startCellMutation
    }, dispatch)
})


export default connect(null, mapDispatchToProps)(Game)
