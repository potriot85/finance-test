import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";

const Time = (props) => {
  let timeServer = props.props;
  let realTime = Date(Date.parse(props.props));
  let now = new Date(timeServer);
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  hour = hour < 10 ? "0" + hour : hour;
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Actual Time</Popover.Header>
      <Popover.Body>{realTime}</Popover.Body>
    </Popover>
  );

  const LastTimeTrade = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">
        {hour}:{minute}:{second} Press to details
      </Button>
    </OverlayTrigger>
  );

  return (
    <div>
      <LastTimeTrade />
    </div>
  );
};
export default Time;
