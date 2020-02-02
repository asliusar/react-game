import React from 'react'
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    header: {
        textAlign: 'center',
        margin: 15,
        fontWeight: 'bold',
        fontSize: 20
    }
})

interface HeaderProps {
    className: string
}

const Header = ({className}: HeaderProps) => {
    const classes = useStyles()

    return (
        <div className={`${className} ${classes.header}`}>
            Evolution Game
        </div>
    )
}

export default Header
