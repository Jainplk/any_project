import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <div className="row pb-4 ">
          <div className="zeroCostContent">
          <p>Instant, zero-cost fund transfers with UPI </p>
          <button className="Btn btn-green">Add funds</button>
          <button className="Btn btn-blue">Withdraw</button>
          </div>
        </div>

        <div className="row pt-lg-4">
          <h2 className="fs-3 text-muted pt-4">Equity</h2>
          <table className="table" style={{border:'1px solid #ddd'}}>
            <tr>
              <td><p>Available margin</p></td>
              <td>4,043.10</td>
            </tr>
            <tr>
              <td><p>Used margin</p></td>
              <td>3,757.30</td>
            </tr>

            <tr>
              <td><p>Available cash</p></td>
              <td>4,043.10</td>
            </tr>
            <tr>
              <td><p>Opening Balance</p></td>
              <td>4,043.10</td>
            </tr>

            <tr>
              <td><p>Payin</p></td>
              <td>4064.00</td>
            </tr>

            <tr>
              <td><p>SPAN</p></td>
              <td>0.00</td>
            </tr>

            <tr>
              <td><p>Delivery margin</p></td>
              <td>0.00</td>
            </tr>

            <tr>
              <td><p>Exposure</p></td>
              <td>0.00</td>
            </tr>

            <tr>
              <td><p>Options premium</p></td>
              <td>0.00</td>
            </tr>

            <tr>
              <td><p>Collateral (Liquid funds)</p></td>
              <td>0.00</td>
            </tr>

            <tr>
              <td><p>Collateral (Equity)</p></td>
              <td>0.00</td>
            </tr>
            
            <tr>
              <td><p>Total Collateral</p></td>
              <td>0.00</td>
            </tr>
            
          </table>
        </div>

        <div className="row pt-4">
          <div className="commodity">
          <p>You don't have a commodity account</p>
          <Link to='/signup'><button className="signupBtn">Open Account</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;