import React from "react";

const Percent = (props) => {
    if (props.props >= 0.50) {
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
    }
}
export default Percent