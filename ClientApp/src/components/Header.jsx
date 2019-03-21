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
            style={{ padding: "2px" }}
          >
            <tbody>
              <tr>
                <td style={{ width: "18px", paddingRight: "4px" }} />
                <a href="https://github.com/jacobbathan">
                  <img
                    src={img}
                    style={{
                      border: "1px white solid",
                      height: "18px",
                      width: "18px"
                    }}
                    alt="imgTest"
                  />
                </a>
                <td style={{ lineHeight: "12pt", height: "10px" }}>
                  <span class="pagetop">
                    <b class="hnname">
                      <a href="news">Lilly News</a>
                    </b>
                    {"  "}| <a href="">news</a> | <a href="front">past</a> |{" "}
                    <a href="newcomments">comments</a> | <a href="ask">ask</a> |{" "}
                    <a href="show">show</a> | <a href="jobs">jobs</a> |{" "}
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
