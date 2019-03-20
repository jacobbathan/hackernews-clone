import React from "react";
import * as services from "../AxiosServices";

class Posts extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    services
      .getAllPosts()
      .then(this.getAllPostsSuccess)
      .catch(this.getAllPostsError);
  }

  getAllPostsSuccess = results => {
    console.log(results);
    this.setState({
      posts: results.dataResponse
    });
  };

  getAllPostsError = error => {
    console.log(error);
  };

  render() {
    return (
      <React.Fragment>
        <tr class="athing" id="19444376">
          <td align="right" valign="top" class="title">
            <span class="rank">1.</span>
          </td>{" "}
          <td valign="top" class="votelinks">
            <center>
              <a
                id="up_19444376"
                href="vote?id=19444376&amp;how=up&amp;goto=news"
              >
                <div class="votearrow" title="upvote" />
              </a>
            </center>
          </td>
          <td class="title">
            <a
              href="https://gankro.github.io/blah/hashbrown-insert/"
              class="storylink"
            >
              Why Hashbrown Does a Double Lookup
            </a>
            <span class="sitebit comhead">
              {" "}
              (
              <a href="from?site=gankro.github.io">
                <span class="sitestr">gankro.github.io</span>
              </a>
              )
            </span>
          </td>
        </tr>
        <tr>
          <td colSpan="2" />
          <td class="subtext">
            <span class="score" id="score_19444376">
              88 points
            </span>{" "}
            by{" "}
            <a href="user?id=mbrubeck" class="hnuser">
              mbrubeck
            </a>{" "}
            <span class="age">
              <a href="item?id=19444376">1 hour ago</a>
            </span>{" "}
            <span id="unv_19444376" /> |{" "}
            <a href="hide?id=19444376&amp;goto=news">hide</a> |{" "}
            <a href="item?id=19444376">21&nbsp;comments</a>{" "}
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Posts;
