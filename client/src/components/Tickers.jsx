import React from "react";
import CompanyName from "./Elements/CompanyName";
import Price from "./Elements/Price";
import Percent from "./Elements/Percent";
import Time from "./Elements/Time";
import Change from "./Elements/Change";
import Yield from "./Elements/Yield";
import Devidents from "./Elements/Devidents";

const Tickers = (props) => {
  let element = props.props.data.map((el) => {
    return (
      <tr key={el.ticker}>
        <td>
          <CompanyName props={el.ticker} />
        </td>
        <td>{el.exchange}</td>
        <td>
          <Price props={el.price} />
        </td>
        <td>
          <Change props={el.change} />
        </td>
        <td>
          <Percent props={el.change_percent} />
        </td>
        <td>
          <Devidents props={el.dividend} />
        </td>
        <td>
          <Time props={el.last_trade_time} />
        </td>
        <td>
          <Yield props={el.yield} />
        </td>
      </tr>
    );
  });

  return <tbody>{element}</tbody>;
};
export default Tickers;
