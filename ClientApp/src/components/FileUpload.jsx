import React from "react";
import * as imageServices from "../ImageServices";

class FileUpload extends React.Component {
  state = {
    primaryImage: ""
  };

  fileRef = React.createRef();

  uploadImage = file => {
    imageServices
      .uploadImage(file)
      .then(this.uploadImageSuccess)
      .catch(this.uploadImageError);
  };

  uploadImageSuccess = res => {
    console.log(res);
  };

  uploadImageError = error => {
    console.log(error);
  };

  handleChange = evt => {
    const file = evt.target.files[0];
    this.uploadImage(file);
  };

  render() {
    return (
      <div>
        <label htmlFor="uploadImage">Upload an Image:</label>
        <input
          // ref={this.fileRef}
          id="primaryImage"
          type="file"
          name="primaryImage"
          value={this.state.primaryImage}
          onChange={this.handleChange}
        />
        <br />
        <button type="button" onClick={this.uploadImage}>
          upload
        </button>
      </div>
    );
  }
}

export default FileUpload;
