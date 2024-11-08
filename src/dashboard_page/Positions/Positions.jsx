import React from "react";
import {positions} from '../../data/data'

function Positions() {
    return ( 
        <div className="position">
         <h3 className="title">Positions ({positions.length}) </h3>
         <div className="order-table">
        <table>
          <tbody>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          </tbody>
          {positions.map((stock, index) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tbody key={index}>
                <tr>
              <td>{stock.product}</td>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{currVal.toFixed(2)}</td>
              <td className={dayClass}>{stock.day}</td>
            </tr>
              </tbody>
            )
          })}
          </table>
          </div>
        </div>
     );
}

export default Positions;