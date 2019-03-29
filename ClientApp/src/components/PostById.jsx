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
        score: 0,
        id: 0
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

  sharePost = () => {
    services
      .shareToSlack(this.state.post.body)
      .then(this.sharePostSuccess)
      .catch(this.sharePostError);
  };

  sharePostSuccess = res => {
    console.log(res);
  };

  sharePostError = err => {
    console.log(err);
  };

  render() {
    return (
      <table class="fatitem" border="0">
        <tbody>
          <tr class="athing">
            <td align="right" valign="top" class="title">
              <span class="rank" />
            </td>{" "}
            <td valign="top" class="votelinks">
              <center>
                <span id={this.state.post.id}>
                  <div class="votearrow" title="upvote" />
                </span>
              </center>
            </td>
            <td class="title">
              <a href={this.state.post.url} class="storylink">
                {this.state.post.title}
              </a>
            </td>
          </tr>
          <tr>
            <td colspan="2" />
            <td class="subtext">
              <span class="score" id={this.state.post.id}>
                {this.state.post.score} points
              </span>{" "}
              by{" "}
              <a href="user?id=olivierduval" class="hnuser">
                {this.state.post.createdBy}
              </a>{" "}
              |
              <span class="age">
                <span>
                  {" "}
                  post made {this.getDate(this.state.post.dateCreated)}
                </span>
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
            <br />
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
