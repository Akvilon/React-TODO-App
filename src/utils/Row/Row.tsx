import * as React from 'react';
import injectSheet from 'react-jss';
import styles from './Row.styles';

const Row = ({leftSide, rightSide, classes}) =>{

    return (
        <div className={classes.row}>
            <div className={classes.rowLeft}>
                {leftSide}
            </div>
            <div className={classes.rowRight}>
                {rightSide}
            </div>   
        </div>
    )
};

const StyledRow = injectSheet(styles)(Row);

export {StyledRow};