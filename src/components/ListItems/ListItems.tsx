import * as React from 'react';
import { ListItem } from '../../models/ListItem';
import injectSheet from 'react-jss';
import styles from './ListItems.style';
import { WithStyles } from '@material-ui/styles';
import {StyledItem as Item} from "./Item";


interface ListProps {
    items: Array<ListItem>,
    onDelete(id:number): number,
    onToggleDone(id:number): number
}
interface ListState {}

class ListItems extends React.PureComponent<ListProps & WithStyles<typeof styles>, ListState> {

   render() {

        const { items, classes, onDelete, onToggleDone, } = this.props;

        return (
            <ul className={classes.listItems}>
                {
                    items.map((items) => {

                        const {id, ...otherProps} = items;

                        return (
                            <li className={classes.item} 
                                key={id}>

                                <Item {...otherProps}
                                      onToggleDone={()=>onToggleDone(id)}
                                    onDelete={()=>onDelete(id)}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
   }
    
}

const StyledListItems = injectSheet(styles)(ListItems);
export { StyledListItems };