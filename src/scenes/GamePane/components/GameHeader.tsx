import React from 'react'
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    header: {
        textAlign: 'center'
    }
})

const GameHeader = () => {
    const classes = useStyles()

    return (
        <div className={classes.header}>
            Game Pane
        </div>
    )
}

export default GameHeader
