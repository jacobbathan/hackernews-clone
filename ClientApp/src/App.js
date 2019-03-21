import React, { Component } from "react";
import { Route } from "react-router";
import PostsDashboard from "./components/PostsDashboard";
import Header from "./components/Header";
import PostForm from "./components/PostForm";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <center id="contentWrapper">
          <table
            id="hnmain"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="85%"
            bgcolor="#f6f6ef"
          >
            <tbody>
              <Header />
              <Route
                path="/"
                exact
                render={props => <PostsDashboard {...props} />}
              />
              <Route path="/submit" render={props => <PostForm {...props} />} />
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
