import * as React from 'react';
import Button from '@material-ui/core/Button';
import injectSheet from 'react-jss';
import styles from './Item.styled';


const Item = ({title, done, onToggleDone, onDelete, classes}) => {

    let variant:any = 'outlined';
    let clazz:string = '';

    if(done){
        variant = 'contained';
        clazz += classes.done;
    }

    return (
        <>
            <p className={clazz}>{title}</p>
            <div>
                <Button variant={variant}
                        onClick={onToggleDone}>
                    Done
                </Button>
                <Button variant="contained"
                        color="secondary"
                        onClick={onDelete}>
                    Delete
                </Button>
            </div>
        </>
    )
};


const StyledItem = injectSheet(styles)(Item);

export { StyledItem };