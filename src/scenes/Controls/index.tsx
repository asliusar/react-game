import React from 'react'
import {makeStyles} from "@material-ui/styles"
import {selectIsPaused} from "../Game/state/selector"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {startCellMutation, stopCellMutation} from "../Game/state/actions"
import PauseControls from "./PauseControls"
import LiveControls from "./LiveControls"

const useStyles = makeStyles({
    content: {
        display: 'flex',
        justifyContent: 'left',
        margin: '10px',
        paddingLeft: '100px'
    },
    hint: {
        lineHeight: '36px',
        textAlign: 'center',
        marginLeft: 20
    }
})

interface ControlsProps {
    className?: string
    isPaused: boolean,
    startCellMutation: () => void,
    stopCellMutation: () => void
}

export const Controls = (props: ControlsProps) => {
    const classes = useStyles()
    return (
        <div className={`${props.className}`}>
            {props.isPaused
                ? <PauseControls
                    classes={classes}
                    onChange={() => props.startCellMutation()}
                />
                : <LiveControls
                    classes={classes}
                    onChange={() => props.stopCellMutation()}
                />
            }
        </div>
    )
}


const mapStateToProps = (state: any) => ({
    isPaused: selectIsPaused(state)
})

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators({
        startCellMutation,
        stopCellMutation
    }, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Controls)
