import React from "react";
import img from "../assests/images/importantLillyPicture.jpg";
import "./PostsDashboard.css";
import Posts from "./Posts";

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
                <Posts />
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <img src={img} height="10" width="10" alt="testTxt" />
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
              lilly pictures. Built using React {React.version}
            </center>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default PostsDashboard;
