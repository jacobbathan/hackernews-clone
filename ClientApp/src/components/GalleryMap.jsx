import React from "react";

class GalleryMap extends React.Component {
  mapImages = () => {
    const { images } = this.props;
    return images.map(data => (
      <React.Fragment>
        <img
          style={{ height: "200px", width: "auto", padding: "10px" }}
          src={data.imageUrl}
          alt={data.id}
        />
      </React.Fragment>
    ));
  };

  render() {
    return this.mapImages();
  }
}

export default GalleryMap;
