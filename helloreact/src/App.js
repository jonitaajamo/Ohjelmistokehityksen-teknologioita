import React, {Component} from "react";
import "./App.css";
import Weather from "./Weather";
import Counter from "./Counter";
import Todo from "./Todo";
import GitHubRepositories from "./GithubRepos";
import "bulma/css/bulma.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="has-text-centered">React-simple-apps</h1>
        <div className="container is-fluid has-text-centered">
          <Weather/>
          <Counter/>
          <GitHubRepositories/>
          <Todo/>
        </div>
      </div>
    );
  }
}

export default App;
