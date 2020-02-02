import React from 'react'
import {makeStyles} from "@material-ui/styles"
import {Button} from "@material-ui/core"
import {selectIsPaused} from "../Game/state/selector"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {startCellMutation, stopCellMutation} from "../Game/state/actions"


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

interface ControlPanel {
    classes?: any,
    onChange: () => void
}

const PauseControls = ({classes, onChange}: ControlPanel) => (
    <div className={classes.content}>
        <Button
            variant="contained"
            color="primary"
            onClick={onChange}
        >
            Resume
        </Button>
        <div className={classes.hint}>
            Please select cells
        </div>
    </div>
)


const ResumeControls = ({classes, onChange}: ControlPanel) => (
    <div className={classes.content}>
        <Button
            variant="contained"
            color="secondary"
            onClick={onChange}
        >
            Pause
        </Button>

        <div className={classes.hint}>
            Pause the game to change the selection
        </div>
    </div>
)

interface ControlsProps {
    className?: string
    isPaused: boolean,
    startCellMutation: () => void,
    stopCellMutation: () => void
}

const Controls = (props: ControlsProps) => {
    const classes = useStyles()
    return (
        <div className={`${props.className}`}>
            {props.isPaused
                ? <PauseControls
                    classes={classes}
                    onChange={() => props.startCellMutation()}
                />
                : <ResumeControls
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
