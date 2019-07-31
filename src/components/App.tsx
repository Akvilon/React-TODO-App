import * as React from 'react';
import Container from '@material-ui/core/Container';
import { Header } from './Header';
import { StyledAddItemForm as AddItemForm } from './AddItemForm';
import { StyledSearch as Search } from './Search';
import { StyledRow as Row } from '../utils/Row';
import { ListItem } from '../models/ListItem';
import { StyledListItems as ListItems } from './ListItems';


interface Props {}

interface State {
    items: Array<ListItem>,
    term:string
}

class App extends React.PureComponent<Props, State> {

    state = {
        items: [],
        term: ''
    };


    createItem(label: string) { 
        this.setState(({items})=>{
            const newItem = new ListItem(label);
            const newArr = [
                ...items,
                newItem
            ];
            return {
                items: newArr
            }
        });
    }

    deleteItem = (id:number) => {
        this.setState(({items})=>{
            const index = items.findIndex((el)=> el.id === id);

            const newArr = [
                ...items.slice(0, index),
                ...items.slice(index + 1)
            ];

            return {
                items: newArr
            }
        });
    };

    onSubmit = (text:string) => {
        this.createItem(text);
    };

    onToogleProperty(arr:Array<ListItem>, id:number, propName:string) {
        const index:number = arr.findIndex((el)=> el.id === id);
        const oldItem: ListItem = arr[index];

        const newItem: ListItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, index),
                newItem,
            ...arr.slice(index + 1)
        ]
    }

    onToggleDone = (id:number) => {
        this.setState(({items})=>{
            return {
                items: this.onToogleProperty(items, id, 'done')
            }
        })
    };

    onSearchChange = (text:string) => {
        this.setState({
            term: text
        });
    };

    search(items, searchValue) {
        return items.filter((item)=>{
            return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        })
    }

    render() {

        const {items, term} = this.state;

        const searchedItems = this.search(items, term);

        const doneCount:number = items.filter((item)=>item.done).length;
        const todoItems:number = items.length - doneCount;

        const addItemForm = (
            <AddItemForm 
                onSubmit={this.onSubmit}/>
        );
        const search = (
            <Search onSearchChange={this.onSearchChange}/>
        );

        return (
            <Container fixed maxWidth="sm">
                <Header doneCount={doneCount} todoItems={todoItems}/>
                <Row leftSide={addItemForm} rightSide={search}/>
                <ListItems items={searchedItems}
                           onDelete={this.deleteItem}
                           onToggleDone={this.onToggleDone}/>
            </Container>
        )
    }
}


export default App;