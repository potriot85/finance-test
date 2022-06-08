import React from "react";
import Table from "react-bootstrap/Table";
import Tickers from "./Tickers";

const Main = (props) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Company name</th>
            <th>Exchange</th>
            <th>Price</th>
            <th>Change</th>
            <th>Percent</th>
            <th>Dividends</th>
            <th>Last trade time</th>
            <th>Yield</th>
          </tr>
        </thead>
        <Tickers props={props} />
      </Table>
    </div>
  );
};
export default Main;
