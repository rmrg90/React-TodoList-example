import React, {Component} from "react";
import styled from 'styled-components';

class TodoList extends Component{

    constructor(props) {
        super(props);

        this.state = {
          items : [{test: "test"}]
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

    render(){

        const TodoListMain = styled.div``;
        const Header = styled.div``;
        const InputTodoList = styled.input``;
        const ButtonTodoList = styled.button``;

        return(
            <TodoListMain>
                <Header>
                    <form onSubmit={this.addItem}>
                        <InputTodoList innerRef={e => this._inputElement = e} placeholder="enter task"/>
                        <ButtonTodoList type="submit">add</ButtonTodoList>
                    </form>
                </Header>
            </TodoListMain>
        );
    }
}

export default TodoList;