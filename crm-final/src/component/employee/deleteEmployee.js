import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../../services/employee";

const DeleteEmployee = () => {

    const deleteId = useSelector(res => res.deleteId);
    const dispatch = useDispatch();

    const deleteEmployeeConfirm = async () => {
        const response = await deleteEmployee(deleteId);
        if (response === true) {
            alert('Employee deleted');
            dispatch({ type: 'setEmptyItems' });
        }
    }

    return (
        <div className={"modal fade"} id="EmployeeDeleteModal" role="dialog">
            <div className={"modal-dialog"}>
                <div className={"modal-content"}>
                    <div className={"modal-header"}>
                        <h4 className={"modal-title"}>Delete Employee</h4>
                        <button type="button" className={"close"} data-dismiss="modal">
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <h5>Are you sure. You want to delete.</h5>
                    </div >
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-danger' data-dismiss='modal'>Close</button>
                        <button type="button" onClick={deleteEmployeeConfirm} data-dismiss='modal' className='btn btn-primary'>Ok</button>
                    </div>
                </div >
            </div >
        </div >
    );

}

export default DeleteEmployee;