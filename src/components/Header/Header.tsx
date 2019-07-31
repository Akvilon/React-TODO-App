import * as React from 'react';
import { StyledRow as Row } from '../../utils/Row';


const Header = ({doneCount, todoItems}) => {

    const logo = (
        <h2>TODO LIST</h2>
    );
    const counter = (
        <h4>{doneCount} done {todoItems} more to do</h4>
    );

    return (
        <div className="header">
           <Row leftSide={logo} rightSide={counter}/>          
        </div>
    )
};


export {Header};