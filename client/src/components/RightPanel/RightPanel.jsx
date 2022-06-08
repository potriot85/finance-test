import React from "react";
import { useSelector } from "react-redux";
import CompanyName from "../Elements/CompanyName";
import Accordion from "react-bootstrap/Accordion";

const RightPanel = () => {
  const data = useSelector((state) => state.dataPage.data);
  let maxData = (a, b) => (a.price > b.price ? 1 : -1);
  let sortedData = data.sort(maxData);
  let minTicker = sortedData[0];
  let maxTicker = sortedData[sortedData.length - 1];
  return (
    <div>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Show maximum Ticker</Accordion.Header>
          <Accordion.Body>
            <div>
              {maxTicker ? (
                <CompanyName props={maxTicker.ticker} />
              ) : (
                <div>Не має данних</div>
              )}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Show minimum Ticker</Accordion.Header>
          <Accordion.Body>
            <div>
              {maxTicker ? (
                <CompanyName props={minTicker.ticker} />
              ) : (
                <div>Не має данних</div>
              )}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default RightPanel;
