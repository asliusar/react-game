import React from 'react'
import Game from './scenes/Game'
import Controls from './scenes/Controls'
import {makeStyles} from "@material-ui/styles"
import {Provider} from 'react-redux'
import store from "./store"
import {NUMBER_OF_CELLS} from "./scenes/Game/state/reducer"
import Header from "./scenes/Header"

export const CELL_WIDTH = 50

const useStyles = makeStyles({
    container: {
        margin: '0 auto',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: 'auto',
        gridTemplateRows: '50px auto 100px',
        gridTemplateAreas: '"header" "game" "controls"'
    },
    gamePane: {
        gridArea: 'game'
    },
    controls: {
        gridArea: 'controls'
    },
    header: {
        gridArea: 'header'
    }
})

const App = () => {
    const classes = useStyles()

    return (
        <Provider store={store}>
            <div className={classes.container} style={{width: Math.sqrt(NUMBER_OF_CELLS) * CELL_WIDTH}}>
                <Header className={classes.header}/>
                <Game className={classes.gamePane}/>
                <Controls className={classes.controls}/>
            </div>
        </Provider>
    )
}

export default App
