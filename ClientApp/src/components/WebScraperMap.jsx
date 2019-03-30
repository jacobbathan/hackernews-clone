import React from "react";

class WebScraperMap extends React.Component {
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

  scraperMap = () => {
    const { posts } = this.props;
    return posts.map((data, index) => (
      <React.Fragment>
        <tr class="spacer" style={{ height: "3px" }} />
        <tr class="athing" id={data.id}>
          <td align="right" valign="top" class="title">
            <span class="rank">{index + 1}.</span>
          </td>{" "}
          <td valign="top" class="votelinks">
            <center />
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
            by{" "}
            <span id={data.createdBy} class="hnuser">
              {data.createdBy}
            </span>{" "}
            <span class="age">
              <span>{this.getDate(data.dateCreated)}</span>
            </span>{" "}
          </td>
        </tr>
        <tr class="morespace" style={{ height: "3px" }} />
      </React.Fragment>
    ));
  };

  render() {
    return this.scraperMap();
  }
}

export default WebScraperMap;
