import React from 'react';
import WatchList from '../WatchList';
import Profile from './Profile';
import Navbar from '../Navbar';

function ProfilePage() {
    return (
        <>
            <div className="dashboardNavbar">
                <div className="row d-flex flex-nowrap p-0 m-0">
                    <Navbar />
                </div>
            </div>

            <div className="row d-flex justify-content-evenly align-items-start p-0 m-0">
                <div className="col-lg-4 p-0">
                    <WatchList />
                </div>

                <div className="col-lg-8 p-0" style={{ borderLeft: "1px solid rgb(224, 224, 224)" }}>
                    <Profile />
                </div>
            </div>

        </>
    );
}

export default ProfilePage;