import React, {Component} from 'react';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';

const Ul = styled.ul`
list-style: none;
padding-left: 0;
width: 250px;
`;
const Li = styled.li`
color: #e6fad7;
background-color: rgba(255,255,255,0.5);
padding: 15px;
margin-bottom: 15px;
border-radius: 5px;

transition: background-color .4s ease-out;

&:hover{
background-color: #3a8ba2;
cursor: pointer;
}
`;

class TodoItems extends Component{

    createTasks = item => <Li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</Li>;

    delete = key => this.props.delete(key);

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);

        return(
            <Ul>
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </Ul>
        );

    }
}

export default TodoItems;