import React from "react";
import { Image } from "semantic-ui-react";
import Filter from "./Filterindex.js";

function tvShow(props) {
  return (
    <div>
      <br />
      <img src={props.image.medium} onClick={props.selectShow} alt="" />
    </div>
  );
}

export default tvShow;