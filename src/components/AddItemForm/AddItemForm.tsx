import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ChangeEvent, FormEvent } from 'react';
import injectSheet from 'react-jss';
import styles from './AddItemForm.styles';
import { WithStyles } from '@material-ui/styles';


interface Props {
    onSubmit(text:string): string
}
interface State {
    label: string
}

class AddItemForm extends React.PureComponent<Props & WithStyles<typeof styles>, State> {

    state = {
        label: ''
    };

    onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.currentTarget.value;
        this.setState({
            label:value
        });
    };

    onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const text = this.state.label;
        this.props.onSubmit(text);
        this.setState({
            label:''
        });
    };

    render(){

        const {classes} = this.props;
    

        return (
            <form 
                className={classes.addForm} 
                noValidate 
                autoComplete="off"
                onSubmit={this.onSubmit}>
                <TextField
                    label="Add Item"
                    className={classes.addItemInput}
                    value={this.state.label}
                    onChange={this.onChangeValue}
                    margin="normal"
                    variant="outlined"
                />    
                <Button type="submit" variant="contained" color="primary" className={classes.addItemBtn}>
                    Add
                </Button>
            </form>
        )
    }
}

const StyledAddItemForm = injectSheet(styles)(AddItemForm);
export {StyledAddItemForm};