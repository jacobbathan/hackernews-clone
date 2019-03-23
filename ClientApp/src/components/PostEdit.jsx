import React from "react";
import * as services from "../AxiosServices";
import { connect } from "react-redux";

class PostEdit extends React.Component {
  state = {
    title: "",
    body: "",
    createdBy: "",
    dateCreated: "",
    url: "",
    score: ""
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  componentDidMount() {
    this.setState({
      title: this.props.viewedPost.title,
      body: this.props.viewedPost.body,
      createdBy: this.props.viewedPost.createdBy,
      dateCreated: this.props.viewedPost.dateCreated,
      url: this.props.viewedPost.url,
      score: this.props.viewedPost.score
    });
  }

  submitEdit = () => {
    const payload = {
      title: this.state.title,
      body: this.state.body,
      url: this.state.url,
      score: this.state.score
    };

    services
      .updatePost(payload, this.state.postId)
      .then(this.updatePostSuccess)
      .catch(this.updatePostError);
  };

  updatePostSuccess = res => {
    console.log(res);
    this.props.history.push("/item/" + this.state.postId);
  };

  updatePostError = err => {
    console.log(err);
  };

  goBack = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <td>
        <tr style={{ height: "5px" }} />
        <form method="post" action="/r">
          <table border="0">
            <tbody>
              <tr>
                <td>title</td>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    size="50"
                    onChange={this.handleChange}
                  />
                  <span style={{ marginLeft: "10px" }} />
                </td>
              </tr>
              <tr>
                <td>url</td>
                <td>
                  <input
                    type="text"
                    name="url"
                    value={this.state.url}
                    size="50"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td />
              </tr>
              <tr>
                <td>text</td>
                <td>
                  <textarea
                    name="body"
                    rows="4"
                    cols="50"
                    value={this.state.body}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>author</td>
                <td>
                  <input
                    type="text"
                    name="createdBy"
                    value={this.state.createdBy}
                    size="50"
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <button type="button" onClick={this.submitEdit}>
                    edit
                  </button>
                  <button type="button" onClick={this.goBack}>
                    go back
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </td>
    );
  }
}

const mapStateToProps = state => {
  return {
    viewedPost: state.viewedPost
  };
};

export default connect(mapStateToProps)(PostEdit);
