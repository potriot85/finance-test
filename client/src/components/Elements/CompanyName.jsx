import React from "react";

const CompanyName = (props) => {
    if (props.props ==="AAPL") {
        return (
            <div>
                Apple 
            </div>
        );
    }
    if (props.props === "GOOGL") {
        return (
            <div>
                Google.com
            </div>
        );
    }
    if (props.props === "MSFT") {
        return (
            <div>
                Microsoft.com
            </div>
        );
    }
    if (props.props === "AMZN") {
        return (
            <div>
                Amazon.com
            </div>
        );
    }
    if (props.props === "FB") {
        return (
            <div>
                Facebook.com
            </div>
        );
    }
    if (props.props === "TSLA") {
        return (
            <div>
                Tesla
            </div>
        );
    }
    if (props.props === "SBR") {
        return (
            <div>
                Subaru
            </div>
        );
    }
    return (
        <div>
            {props.props}
        </div>
    )
}
export default CompanyName