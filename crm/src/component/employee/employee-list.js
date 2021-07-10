import { Fragment, useEffect, useState } from "react";
import EmployeeForm from "./employee-form";
import { getEmployee } from '../../services/employee';

const EmployeeList = () => {

    const [addForm, setAddForm] = useState(false);
    const [employee, setEmployee] = useState([]);
    
    const addEmployeeForm = () => {
        setAddForm(true);
    }

    const updateEmployeeHandler = (id) => {
        console.log(id);
    }

    const deleteEmployeeHandler = (id) => {
        console.log(id);
    }

    useEffect(() => {

        const fetchEmployee = async () => {
            const data = await getEmployee();
            let index = 1;
            const tblEmployee = [];
            data.map((item) => {
                const temp = (
                    <tr key={item.employee_id}>
                        <td>{index++}</td>
                        <td>{item.sname}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.designation}</td>
                        <td>{item.city_name}</td>
                        <td className={"table-buttonicon"}>
                            <span style={{ "color": " #007BFF" }} data-toggle="modal" data-target="#EmployeeFormModal"
                                onClick={() => updateEmployeeHandler(item.employee_id)} className={"fa fa-pencil mr-2"} >E</span>
                            <span style={{ "color": "red" }} data-toggle="modal" data-target="#deleteModal"
                                onClick={() => deleteEmployeeHandler(item.employee_id)} className={"fa fa-trash"}>X</span>
                        </td>
                    </tr>);
                tblEmployee.push(temp);
            })
            setEmployee(tblEmployee);
        }
        fetchEmployee();
    }, []);


    return (
        <Fragment>
            <div className={"row"}>
                <div className={"col-sm-10"}>
                    <h2>Task List</h2>
                </div>
                <div className={"col-sm-2 text-right"}>
                    <button type="button" onClick={addEmployeeForm} data-toggle="modal" data-target="#EmployeeFormModal" className={"btn btn-primary mb-3"}>Add
                        Task
                    </button>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-sm-12'}>
                    <table className={"table table-responsive table-hover"}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th >Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Designation</th>
                                <th >City</th>
                                <th>Action</th>
                            </tr>
                        </thead >
                        <tbody>
                            {employee}
                        </tbody>
                    </table>
                </div>
            </div>
            {addForm && <EmployeeForm isUpdate={false} />}
        </Fragment>
    );
}

export default EmployeeList;