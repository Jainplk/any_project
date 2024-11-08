import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to='/dashboard'>
        <button className="orderBtn">
            Get Started
        </button>
        </Link>
       
      </div>
    </div>
  );
};

export default Orders;