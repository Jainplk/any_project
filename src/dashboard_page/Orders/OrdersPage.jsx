import React from 'react';
import WatchList from '../WatchList';
import Orders from './Orders';
import Navbar from '../Navbar';

function OrdersPage() {
    return ( 
        <>
        <div className="dashboardNavbar">
            <div className="row d-flex flex-nowrap p-0 m-0">
                <Navbar/>
            </div>
            </div>

        <div className="row p-0 m-0">
            <div className="col-lg-4 p-0" style={{borderRight: "1px solid rgb(224, 224, 224)"}}>
                <WatchList/>
            </div>
            
            <div className="col-lg-8 p-0">
                <Orders/>
            </div>
        </div>
       
    </>
     );
}

export default OrdersPage;