import React from "react";
import { usePrevious } from "../../utils/functions";

const Price = (props) => {
  const prevCount = usePrevious(props.props);

  if (props.props >= prevCount) {
    return <div className="text-success">{props.props}</div>;
  } else {
    return <div className="text-danger">{props.props}</div>;
  }
};
export default Price;
