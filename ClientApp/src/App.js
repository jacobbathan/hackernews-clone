import React, { Component } from "react";
import PostsDashboard from "./components/PostsDashboard";
import Header from "./components/Header";

class App extends Component {
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
              <PostsDashboard />
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}

export default App;
