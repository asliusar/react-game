import {Button} from "@material-ui/core"
import React from "react"

interface ControlPanel {
    classes?: any,
    onChange: () => void
}

const LiveControls = ({classes, onChange}: ControlPanel) => (
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

export default LiveControls