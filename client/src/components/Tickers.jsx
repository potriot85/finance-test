import React from "react";
import CompanyName from "./Elements/CompanyName";
import Price from "./Elements/Price";
import Percent from "./Elements/Percent";
import Time from "./Elements/Time";
import Change from "./Elements/Change";
import Yield from "./Elements/Yield";

const Tickers =(props)=>{

    let element = props.props.data.map((el) => {
            return (
                <tr>
                    <td><CompanyName props={el.ticker} /></td>
                    <td>{el.exchange}</td>
                    <td><Price props={el.price} /></td>
                    <td><Change props={el.change} /></td>
                    <td><Percent props={el.change_percent} /></td>
                    <td><Time props={el.last_trade_time} /></td>
                    <td><Yield props={el.yield}/></td>
                </tr>     
            )
    })
   
    return (
            <tbody>
                {element}
            </tbody>
        );
    }
export default Tickers;