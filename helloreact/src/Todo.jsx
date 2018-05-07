import React, {Component} from "react";
import Todos from "./Todos";
import "./App.css";

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            date: "",
            task: "",
            todos: []
        };
    }

    TaskChangeHandler = e => {
        this.setState({task: e.target.value});
    };

    DateChangeHandler = e => {
        this.setState({date: e.target.value});
    };

    addTodo = e => {
        e.preventDefault();
        const {date, task} = this.state;
        const todoItem = {
            date,
            task
        };
        this.setState({
            todos: [
                ...this.state.todos,
                todoItem
            ],
            task: "",
            date: ""
        });
    };

    onDelete(key) {
        this.deleteTodo(key);
    }

    deleteTodo = key => {
        const todos = this
            .state
            .todos
            .filter((todo, i) => i !== key);
        this.setState({todos});
    };

    render() {
        return (
            <div className="box">
                <h1 className="title">Todos</h1>
                <form onSubmit={this.addTodo}>
                    <div className="field has-addons has-addons-centered">
                        <p className="control">
                            <input
                                type="date"
                                className="input"
                                onChange={this.DateChangeHandler}
                                value={this.state.date}/>
                        </p>
                        <p className="control">
                            <input
                                type="text"
                                className="input"
                                onChange={this.TaskChangeHandler}
                                value={this.state.task}/>
                        </p>
                        <p className="control">
                            <input className="button is-primary" type="submit" value="Add"/>
                        </p>
                    </div>
                </form>
                <br/>

                <div className="centered-table">
                    <Todos
                        todos={this.state.todos}
                        onDelete={this
                        .onDelete
                        .bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Todo;
