import { Fragment } from 'react';
import ButtonModal from '../../component/employee/buttonModal';
import DeleteEmployee from '../../component/employee/deleteEmployee';
import EmployeeForm from '../../component/employee/Employeeform';
import EmployeeList from '../../component/employee/employeeList';

const Employee = () => {
    return (
        <Fragment>
            <div className={"row"}>
                <div className={"col-sm-10"}>
                    <h2>Employee List</h2>
                </div>
                <ButtonModal />
            </div>
            <EmployeeList />
            <EmployeeForm />
            <DeleteEmployee />
        </Fragment>
    );
}

export default Employee;