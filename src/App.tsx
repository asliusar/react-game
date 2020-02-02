import React from 'react';
import GamePane from './scenes/GamePane';
import Controls from './scenes/Controls';
import {makeStyles} from "@material-ui/styles";
import {Provider} from 'react-redux';
import store from "./store"
import {NUMBER_OF_CELLS} from "./scenes/GamePane/state/reducer"

export const CELL_WIDTH = 50

const useStyles = makeStyles({
    container: {
        margin: '0 auto',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: 'auto',
        gridTemplateRows: 'auto 100px',
        gridTemplateAreas: '"game" "controls"'
    },
    gamePane: {
        gridArea: 'game'
    },
    controls: {
        gridArea: 'controls'
    }
});

const App = () => {
    const classes = useStyles()

    return (
        <Provider store={store}>
            <div className={classes.container} style={{width: Math.sqrt(NUMBER_OF_CELLS) * CELL_WIDTH}}>
                <GamePane className={classes.gamePane} />
                <Controls className={classes.controls}/>
            </div>
        </Provider>
    );
}

export default App;
