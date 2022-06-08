import s from "./Elements.module.css";
import React from "react";
import arrowUp from "../../images/arrowUp.png";
import arrowDown from "../../images/arrowDown.jpg";
import { usePrevious } from "../../utils/functions";

const Change = (props) => {
  const prevCount = usePrevious(props.props);
  let difference = props.props - prevCount;
  if (difference >= 0) {
    return (
      <div className="text-success">
        {props.props} <img src={arrowUp} className={s.arrow} alt="arrowUp" />
      </div>
    );
  } else {
    return (
      <div className="text-danger">
        {props.props}{" "}
        <img src={arrowDown} className={s.arrow} alt="arrowDown" />
      </div>
    );
  }
};
export default Change;
