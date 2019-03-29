import React from "react";
import * as imageServices from "../ImageServices";

class FileUpload extends React.Component {
  state = {
    primaryImage: ""
  };

  fileRef = React.createRef();

  uploadImage = event => {
    const files = this.fileRef.current.file;
    const formData = new FormData();
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        formData.append("uploads", file, file.name);
      }
    }

    // event.preventDefault();
    // const file_input = this.fileInputRef.current;
    // const data = new FormData();
    // data.append("file", file_input.files[0]);
    imageServices
      .uploadImage(formData)
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
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="uploadImage">Upload an Image:</label>
        <input
          ref={this.fileInputRef}
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
