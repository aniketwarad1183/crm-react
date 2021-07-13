import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MainBody from "./MainBody";
import './MainNavbar.css';

const MainNavbar = () => {
    return (
        <Fragment>
            <div className={"vertical-nav bg-white"} id="sidebar">
                <div className={"py-4 px-3 mb-4 bg-light"} id="profile-border">
                    <div className={"media d-flex align-items-center"}>
                        <img src={"https://www.cmml.us/sites/all/themes/cmml_rspsv/images/no-photo-lg.png"} alt="..." width="65"
                            className={"mr-3 rounded-circle img-thumbnail shadow-sm"} />
                        <div className={"media-body"}>
                            <h4 className={"m-0"}>Aniket</h4>
                            <p className={"font-weight-light text-muted mb-0"}>Project Trainee</p>
                        </div>
                    </div>
                </div>

                <p className={"text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0"}>
                    Main
                </p>

                <ul className={"nav flex-column bg-white mb-0"}>
                    <li className={"nav-item"} >
                        <NavLink activeClassName={"activemenu"} to="lead" id='navLead' className={"nav-link text-dark"}>
                            <i className={"fa fa-pencil-square-o mr-3 text-primary fa-fw"}></i>
                            Leads
                        </NavLink>
                    </li>
                    <li className="{nav-item" >
                        <NavLink activeClassName={"activemenu"} to="customer" id='navCustomer' className={"nav-link text-dark"}>
                            <i className={"fa fa-user mr-3 text-primary fa-fw"}></i>
                            Customer
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName={"activemenu"} to="employee" id='navEmployee' className={"nav-link text-dark"}>
                            <i className={"fa fa-address-book mr-3 text-primary fa-fw"}></i>
                            Employee
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName={"activemenu"} to="task" id='navTask' className={"nav-link text-dark"}>
                            <i className={"fa fa-tasks mr-3 text-primary fa-fw"}></i>
                            Task
                        </NavLink>
                    </li>
                </ul>
            </div>
            <MainBody />
        </Fragment>
    );
}

export default MainNavbar;