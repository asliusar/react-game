import React from 'react';
import GamePane from './scenes/GamePane';
import Controls from './scenes/Controls';
import {makeStyles} from "@material-ui/styles";

export const CELL_WIDTH = 50
export const CELLS_IN_ROW = 11
export const ROW_WIDTH = CELL_WIDTH * CELLS_IN_ROW

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
        <div className={classes.container} style={{width: ROW_WIDTH}}>
            <GamePane className={classes.gamePane} />
            <Controls className={classes.controls}/>
        </div>
    );
}

export default App;
