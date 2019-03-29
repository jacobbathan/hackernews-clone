import React from "react";
import { NavLink } from "react-router-dom";
//import GetDate from "./GetDate.jsx";

class PostsMap extends React.Component {
  urlParser = url => {
    let domain = url
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .split(/[/?#]/)[0];

    return domain;
  };

  getDate = longDate => {
    let date = new Date(longDate);
    return (
      date.getUTCMonth() +
      1 +
      "/" +
      date.getUTCDate() +
      "/" +
      date.getFullYear()
    );
  };

  mapPosts = () => {
    console.log("POSTSMAP RENDER");
    const { posts } = this.props;
    return posts.map((data, index) => (
      <React.Fragment>
        <tr class="spacer" style={{ height: "3px" }} />
        <tr class="athing" id={data.id}>
          <td align="right" valign="top" class="title">
            <span class="rank">{index + 1}.</span>
          </td>{" "}
          <td valign="top" class="votelinks">
            <center>
              <a id={data.id} href="">
                <div class="votearrow" title="upvote" />
              </a>
            </center>
          </td>
          <td class="title">
            <a href={data.url} class="storylink">
              {data.title}
            </a>
            <span class="sitebit comhead">
              {" "}
              (
              <a href={data.url}>
                <span class="sitestr">{this.urlParser(data.url)}</span>
              </a>
              )
            </span>
          </td>
        </tr>
        <tr>
          <td colSpan="2" />
          <td class="subtext">
            <span class="score" id={data.id}>
              {data.score} points
            </span>{" "}
            by{" "}
            <span id={data.createdBy} class="hnuser">
              {data.createdBy}
            </span>{" "}
            <span class="age">
              <span>{this.getDate(data.dateCreated)}</span>
            </span>{" "}
            <span id="unv_19444376" /> |{" "}
            <NavLink to={"/item/" + data.id}>show</NavLink>
          </td>
        </tr>
        <tr class="morespace" style={{ height: "3px" }} />
      </React.Fragment>
    ));
  };

  render() {
    return this.mapPosts();
  }
}

export default PostsMap;
