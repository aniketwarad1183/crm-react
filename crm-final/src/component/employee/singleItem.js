import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useDispatch } from 'react-redux';
import { getSingleEmployee } from '../../services/employee';

const SingleItem = (props) => {

    const dispatch = useDispatch();

    const updateEmployeeHandler = async (id) => {
        const response = await getSingleEmployee(id);
        dispatch({ type: 'updateDateForEmployee', employeeDataForUpdate: response });
    }

    const deleteEmployeeHandler = (id) => {
        dispatch({ type: 'deleteId', deleteId: id });
    }

    return (
        <tr>
            <td>{props.data.sname}</td>
            <td>{props.data.email}</td>
            <td>{props.data.mobile}</td>
            <td>{props.data.designation}</td>
            <td>{props.data.city_name}</td>
            <td className={"table-buttonicon"}>
                <span style={{ "color": " #007BFF" }} data-toggle="modal" data-target="#EmployeeFormModal"
                    className={"fa fa-pencil mr-2"} onClick={() => updateEmployeeHandler(props.data.employee_id)} ><EditOutlinedIcon /></span>
                <span style={{ "color": "red" }} data-toggle="modal" data-target="#EmployeeDeleteModal"
                    className={"fa fa-trash"} onClick={() => deleteEmployeeHandler(props.data.employee_id)}><DeleteOutlinedIcon /></span>
            </td>
        </tr>
    );
}

export default SingleItem;