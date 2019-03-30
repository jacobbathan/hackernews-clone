import React from "react";
import img from "../assests/images/importantLillyPicture.jpg";

class Header extends React.Component {
  render() {
    return (
      <tr>
        <td bgcolor="#ff6600">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style={{ padding: "4px" }}
          >
            <tbody>
              <tr>
                <td style={{ width: "18px" }} />
                <a
                  href="https://github.com/jacobbathan"
                  style={{ marginRight: "0px" }}
                >
                  <img
                    src={img}
                    style={{
                      border: "1px white solid",
                      height: "18px",
                      width: "18px",
                      marginRight: "-10px"
                    }}
                    alt="imgTest"
                  />
                </a>
                <td style={{ lineHeight: "12pt", height: "10px" }}>
                  <span class="pagetop">
                    <b class="hnname">
                      <a href="">Lilly News</a>
                    </b>
                    {"  "}| <a href="">news</a> |{" "}
                    <a href="fileUpload">file upload</a> |{" "}
                    <a href="webscraper">web scraper</a> |{" "}
                    <a href="gallery">gallery</a> | <a href="jobs">jobs</a> |{" "}
                    <a href="submit">submit</a>{" "}
                  </span>
                </td>
                <td style={{ textAlign: "right", paddingRight: "4px" }} />
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    );
  }
}

export default Header;
