import React from "react";

const Percent = (props) => {
    if (props.props >= 0.50) {
        return (
            <div className="text-success">
                {props.props}
            </div>
        );
    } else {
        return (
            <div className="text-danger">
                {props.props}
            </div>
        );
    }
}
export default Percent