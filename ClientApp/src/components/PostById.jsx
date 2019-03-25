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

  deletePost = () => {
    let deleteconfirm = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (deleteconfirm) {
      this.deletePostConfirm();
    } else {
      console.log("POST NOT DELETED");
    }
  };

  deletePostConfirm = () => {
    services
      .deletePost(this.state.postId)
      .then(this.deletePostSuccess)
      .catch(this.deletePostError);
  };

  deletePostSuccess = res => {
    console.log(res);
    this.props.history.push("/");
  };

  deletepostError = err => {
    console.log(err);
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
              |
              <span class="age">
                <a href="item?id=19453948">
                  {" "}
                  post made {this.getDate(this.state.post.dateCreated)}
                </a>
              </span>{" "}
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
              <button type="button" onClick={this.deletePost}>
                delete
              </button>
              <button type="button" onClick={this.goBack}>
                go back
              </button>
              <br />
              <button type="button" onClick={this.sharePost}>
                share to slack
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
