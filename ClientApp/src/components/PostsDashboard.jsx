import React from "react";
// import img from "../assests/images/importantLillyPicture.jpg";
import "./PostsDashboard.css";
import Posts from "./Posts";
import { Route } from "react-router";
import PostById from "./PostById";
import PostForm from "./PostForm";
import PostEdit from "./PostEdit";

class PostsDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>
            <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
              <tbody>
                <tr class="spacer" style={{ height: "5px" }} />
                <tr class="morespace" style={{ height: "10px" }} />
                <Route path="/" exact render={props => <Posts {...props} />} />
                <Route
                  path="/submit"
                  exact
                  render={props => <PostForm {...props} />}
                />
                <Route path="/item" render={props => <PostById {...props} />} />
                <Route path="/edit" render={props => <PostEdit {...props} />} />
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table width="100%" cellspacing="0" cellpadding="1">
              <tbody>
                <tr>
                  <td bgcolor="#ff6600" />
                </tr>
              </tbody>
            </table>
            <br />
            <center>
              some dope things would go here, like maybe a search or some more
              lilly pictures.
              <br />
              built using react {React.version}
            </center>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default PostsDashboard;
