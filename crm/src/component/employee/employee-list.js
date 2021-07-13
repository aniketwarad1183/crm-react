import { Fragment, useEffect, useState } from "react";
import EmployeeForm from "./employee-form";
import { deleteEmployee, getEmployee, getSingleEmployee } from '../../services/employee';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const EmployeeList = () => {

    const [addForm, setAddForm] = useState(null);
    const [employee, setEmployee] = useState([]);
    const [updatedFormData, setUpdatedFormData] = useState(null);

    const addEmployeeForm = () => {
        setAddForm(false);
    }

    const updateEmployeeHandler = async (id) => {
        const data = await getSingleEmployee(id);
        setUpdatedFormData(data);
        setAddForm(true);
    }

    const deleteEmployeeHandler = async (id) => {
        const data = await deleteEmployee(id);
        if (data === true) {
            alert('Employee deleted');
        }
    }

    useEffect(() => {
        const fetchEmployee = async () => {
            const data = await getEmployee();
            let index = 1;
            const tblEmployee = [];
            for (const item of data.items) {
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
                                onClick={() => updateEmployeeHandler(item.employee_id)} className={"fa fa-pencil mr-2"} ><EditOutlinedIcon /></span>
                            <span style={{ "color": "red" }} data-toggle="modal" data-target="#deleteModal"
                                onClick={() => deleteEmployeeHandler(item.employee_id)} className={"fa fa-trash"}><DeleteOutlinedIcon /></span>
                        </td>
                    </tr>);
                tblEmployee.push(temp);
            }
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
            <EmployeeForm isUpdate={addForm} formDataForUpdate={updatedFormData} />
        </Fragment>
    );
}

export default EmployeeList;