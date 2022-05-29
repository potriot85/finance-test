import React from "react";

const Time = (props) => {
let realTime = Date( Date.parse(props.props))
        return (
            <div>
                {realTime}
            </div>
        );
}
export default Time