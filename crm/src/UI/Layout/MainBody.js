import { Redirect, Route, Switch } from "react-router-dom";
import Employee from "../../pages/employee/employee";

const MainBody = () => {
    return (
        <div className={"page-content"} id="content">
            <button id="sidebarCollapse" type="button" style={{ "fontSize": "22px" }}
                className={"btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"}>
                <i className={"fa fa-bars mr-2"}></i>
            </button>
            <Switch>
                <Route path='/employee'>
                    <Employee />
                </Route>
                <Route path='*'>

                </Route>
            </Switch>
        </div>
    );
}

export default MainBody;