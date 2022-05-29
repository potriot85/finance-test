import { useEffect, useRef } from "react";
import React from "react";

const Price = (props) => {
const prevCount = usePrevious(props.props);
function usePrevious(value) {
const ref = useRef();
useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
 if (props.props >= prevCount) {
        return (
            <div class="text-success">
                {props.props}
            </div>
        );
    } else {
        return (
            <div class="text-danger">
                {props.props}
            </div>
        );
    };

}
export default Price