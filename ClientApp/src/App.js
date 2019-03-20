import React, { Component } from "react";
import { Route } from "react-router";
import PostsDashboard from "./components/PostsDashboard";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <Route path="/" render={props => <PostsDashboard {...props} />} />
      </div>
    );
  }
}
