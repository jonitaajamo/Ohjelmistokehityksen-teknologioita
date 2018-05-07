import React, {Component} from "react";
import "./App.css";

class GitHubRepositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      inputValue: ''
    };
  }

  fetchJsonData = () => {
    const searhTerm = this.state.inputValue;
    const url = "https://api.github.com/search/repositories?q=" + searhTerm;
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        this.setState({listItems: responseData.items});
      });
  }

  onSubmit = () => {
    this.fetchJsonData();
  }

  onInputChange = e => {
    this.setState({inputValue: e.target.value})
  }

  render() {
    const itemRows = this
      .state
      .listItems
      .map(repo => (
        <tr key={repo.full_name}>
          <td>{repo.full_name}</td>
          <td>
            <a href={repo.html_url}>{repo.html_url}</a>
          </td>
        </tr>
      ));

    return (
      <div className="box has-text-centered">
        <div className="title">Repository search</div>
        <div class="field has-addons has-addons-centered">
          <div class="control centered-table">
            <input
              class="input"
              type="text"
              placeholder="Find a repository"
              value={this.state.inputValue}
              onChange={this.onInputChange}/>
          </div>
          <div class="control">
            <a class="button is-info" onClick={this.onSubmit}>
              Search
            </a>
          </div>
        </div>
        <div className="centered-table">
          <table className="table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>URL</th>
              </tr>
              {itemRows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default GitHubRepositories;
