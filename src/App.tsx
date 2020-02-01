import React from 'react';
import GamePane from './scenes/GamePane';
import Controls from './scenes/Controls';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    container: {
        width: '100vw',
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
        <div className={classes.container}>
            <GamePane className={classes.gamePane} />
            <Controls className={classes.controls}/>
        </div>
    );
}

export default App;
