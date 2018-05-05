import React, {Component} from "react";

class Todos extends Component {

    deleteHandler(key) {
        this
            .props
            .onDelete(key);
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Task</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {this
                        .props
                        .todos
                        .map((item, key) => (
                            <tr key={key}>
                                <td>{item.date}</td>
                                <td>{item.task}</td>
                                <td>
                                    <button className="button is-danger" onClick={() => this.deleteHandler(key)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        );
    }
}

export default Todos;