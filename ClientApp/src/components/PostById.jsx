import React from "react";
import * as services from "../AxiosServices";

class PostById extends React.Component {
  constructor(props) {
    super(props);
    const newString = window.location;
    const newArray = newString.pathname.split("/");
    this.state = {
      postId: newArray[2],
      post: {
        title: "",
        body: "",
        createdBy: "",
        dateCreated: "",
        url: "",
        score: 0
      }
    };
  }

  componentDidMount() {
    services
      .getPostById(this.state.postId)
      .then(this.getPostSuccess)
      .catch(this.getPostError);
  }

  getPostSuccess = res => {
    console.log(res);
    this.setState({
      post: res
    });
  };

  goBack = () => {
    this.props.history.push("/");
  };

  editPost = () => {
    console.log(this.state.postId);
    this.props.history.push("/edit/" + this.state.postId);
  };

  render() {
    return (
      <table class="fatitem" border="0">
        <tbody>
          <tr class="athing" id="19453948">
            <td align="right" valign="top" class="title">
              <span class="rank" />
            </td>{" "}
            <td valign="top" class="votelinks">
              <center>
                <a
                  id="up_19453948"
                  onclick='return vote(event, this, "up")'
                  href="vote?id=19453948&amp;how=up&amp;auth=38ccc783d9a1305625d544b526c8847701b5fe5b&amp;goto=item%3Fid%3D19453948"
                >
                  <div class="votearrow" title="upvote" />
                </a>
              </center>
            </td>
            <td class="title">
              <a href="item?id=19453948" class="storylink">
                {this.state.post.title}
              </a>
            </td>
          </tr>
          <tr>
            <td colspan="2" />
            <td class="subtext">
              <span class="score" id="score_19453948">
                {this.state.post.score} points
              </span>{" "}
              by{" "}
              <a href="user?id=olivierduval" class="hnuser">
                {this.state.post.createdBy}
              </a>{" "}
              <span class="age">
                <a href="item?id=19453948">{this.state.post.dateCreated}</a>
              </span>{" "}
              <span id="unv_19453948" /> |{" "}
              <a href="hide?id=19453948&amp;auth=38ccc783d9a1305625d544b526c8847701b5fe5b&amp;goto=item%3Fid%3D19453948">
                hide
              </a>{" "}
              |{" "}
              <a
                href="https://hn.algolia.com/?query=Ask%20HN%3A%20PGP%20Keyservers%20in%20Blockchain&amp;sort=byDate&amp;dateRange=all&amp;type=story&amp;storyText=false&amp;prefix&amp;page=0"
                class="hnpast"
              >
                past
              </a>{" "}
              |{" "}
              <a href="https://www.google.com/search?q=Ask%20HN%3A%20PGP%20Keyservers%20in%20Blockchain">
                web
              </a>{" "}
              |{" "}
              <a href="fave?id=19453948&amp;auth=38ccc783d9a1305625d544b526c8847701b5fe5b">
                favorite
              </a>{" "}
              | <a href="item?id=19453948">discuss</a>{" "}
            </td>
          </tr>
          <tr style={{ height: "2px" }} />
          <tr>
            <td colspan="2" />
            <td>
              <p>{this.state.post.body}</p>
            </td>
          </tr>
          <tr style={{ height: "10px" }} />
          <tr>
            <td colspan="2">
              <button type="button" onClick={this.editPost}>
                edit
              </button>
              <button type="button" onClick={this.goBack}>
                go back
              </button>
            </td>
            <td />
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PostById;
