import React from "react";

const Dashboard = ({ user }) => {
    return (
        <div>
            <h1>Welcome to your dashboard, {user.first_name}!</h1>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-3">
                            <div className="d-flex flex-row mb-3">
                                <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f3e0.svg" width="70" alt="" />
                                <div className="d-flex flex-column ml-2">
                                    <span>Homepage</span>
                                    <span className="text-black-50"></span>
                                    <span className="ratings">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                </div>
                            </div>
                            <h6>Return back to the homepage.</h6>
                            <div className="d-flex justify-content-between install mt-3">
                                <span className="text-primary">
                                    <p><a href="/homepage">Click Here</a></p>
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Other col-md-4 sections go here */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
