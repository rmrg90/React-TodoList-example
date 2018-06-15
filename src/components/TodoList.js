import React, {Component} from "react";
import styled from 'styled-components';
import TodoItems from './TodoItems';

const TodoListMain = styled.div`
    border: 2px solid rgba(255,255,255,0.3);
    height: 500px;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(255,255,255,0.1);
    overflow: auto;
    display: inline-block;
    margin: 20px;
`;
const Header = styled.div``;
const InputTodoList = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 2px solid #FFF;
    width: 165px;
    border-radius: 5px;
`;
const ButtonTodoList = styled.button`
    padding: 10px;
    font-size: 16px;
    margin: 10px;
    margin-right: 0px;
    background-color: #09637d;
    border: 2px solid #09637d;
    border-radius: 5px;
    color: white;
    &:hover{
        background-color: #08586f;
        border: 2px solid #08586f;
        cursor: pointer;
        border-radius: 5px;
        color: white;
    }
`;

class TodoList extends Component{

    constructor(props) {
        super(props);

        this.state = {
          items : []
        };
    }


    addItem = e => {
        if (this._inputElement.value !== ''){
            const newItem ={
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: [...prevState.items, newItem]
                };
            });
            this._inputElement.value = "";
        }
        e.preventDefault();
    };

    deleteItem = key => {
        const filteredItems = this.state.items.filter(item => item.key !== key);

        this.setState({
            items : filteredItems
        });
    };

    render(){

        return(
            <TodoListMain>
                <Header>
                    <form onSubmit={this.addItem}>
                        <InputTodoList innerRef={e => this._inputElement = e} placeholder="enter task"/>
                        <ButtonTodoList type="submit">add</ButtonTodoList>
                    </form>
                </Header>
                <TodoItems entries={this.state.items} delete={this.deleteItem}/>
            </TodoListMain>
        );
    }
}

export default TodoList;