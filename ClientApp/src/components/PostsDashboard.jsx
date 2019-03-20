import React from "react";
import img from "../assests/images/importantLillyPicture.jpg";
import "./PostsDashboard.css";
import Posts from "./Posts";

class PostsDashboard extends React.Component {
  render() {
    return (
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
            <tr>
              <td bgcolor="#ff6600">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style={{ padding: "2px" }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "18px", paddingRight: " 4px" }} />
                      <a href="https://news.ycombinator.com">
                        <img
                          src={img}
                          style={{
                            border: "1px white solid",
                            height: "18px",
                            width: "18px"
                          }}
                          alt="imgTest"
                        />
                      </a>

                      <td style={{ lineHeight: "12pt", height: "10px" }}>
                        <span class="pagetop">
                          <b class="hnname">
                            <a href="news">Lilly News</a>
                          </b>
                          {"  "}| <a href="newest">new</a> |{" "}
                          <a href="front">past</a> |{" "}
                          <a href="newcomments">comments</a> |{" "}
                          <a href="ask">ask</a> | <a href="show">show</a> |{" "}
                          <a href="jobs">jobs</a> | <a href="submit">submit</a>{" "}
                        </span>
                      </td>
                      <td style={{ textAlign: "right", paddingRight: "4px" }} />
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="itemlist"
                >
                  <tbody>
                    <Posts />
                    <tr class="spacer" style={{ height: "5px" }} />
                    <tr class="morespace" style={{ height: "10px" }} />
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
                  <a href="https://www.ycombinator.com/apply/">
                    Applications are open for YC Summer 2019
                  </a>
                </center>
                <br />
                <center>
                  <span class="yclinks">
                    <a href="newsguidelines.html">Guidelines</a>
                    <a href="newsfaq.html">FAQ</a>
                    <a href="mailto:hn@ycombinator.com">Support</a>
                    <a href="https://github.com/HackerNews/API">API</a>
                    <a href="security.html">Security</a>
                    <a href="lists">Lists</a>
                    <a href="bookmarklet.html" rel="nofollow">
                      Bookmarklet
                    </a>
                    <a href="http://www.ycombinator.com/legal/">Legal</a>
                    <a href="http://www.ycombinator.com/apply/">Apply to YC</a>
                    <a href="mailto:hn@ycombinator.com">Contact</a>
                  </span>
                  <br />
                  <br />
                  <form method="get" action="//hn.algolia.com/">
                    Search:
                    <input
                      type="text"
                      name="q"
                      value=""
                      size="17"
                      autoCorrect="off"
                      spellCheck="false"
                      autoCapitalize="off"
                      autoComplete="false"
                    />
                  </form>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    );
  }
}

export default PostsDashboard;
