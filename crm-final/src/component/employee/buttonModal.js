import { useDispatch } from "react-redux";

const ButtonModal = () => {

    const dispatch = useDispatch();

    const modalButtonClick = () => {
        dispatch({ type: 'showForm' });
    }

    return (
        <div className={"col-sm-2 text-right"}>
            <button type="button" onClick={modalButtonClick} data-toggle="modal" data-target="#EmployeeFormModal" className={"btn btn-primary mb-3"}>Add
                Employee
            </button>
        </div>
    );

}

export default ButtonModal;