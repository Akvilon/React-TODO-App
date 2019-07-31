import * as React from 'react';
import { ChangeEvent } from 'react';
import injectSheet from 'react-jss';
import TextField from '@material-ui/core/TextField';
import styles from './Search.styles';
import { WithStyles } from '@material-ui/styles';


interface Props {
    onSearchChange(text:string):string
}

class Search extends React.PureComponent<Props & WithStyles<typeof styles>> {

    state = {
        label:''
    };

    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        this.setState({
            label: value
        });
        this.props.onSearchChange(value);
    };

    render(){

        const {classes} = this.props;

        return (
            <TextField
                    className={classes.searchInput}
                    label="Search"
                    value={this.state.label}
                    onChange={this.onChange}
                    margin="normal"
                    variant="outlined"
                />    
        )
    }
}

const StyledSearch = injectSheet(styles)(Search);
export {StyledSearch};