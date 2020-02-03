import {Button} from "@material-ui/core"
import React from "react"

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

export default PauseControls