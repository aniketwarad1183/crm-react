import { forwardRef, useImperativeHandle } from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from '../../services/employee';

const AddEmployee = forwardRef((props, ref) => {

    const dispatch = useDispatch();

    useImperativeHandle(ref, () => ({
        async createEmployee(employeeData) {
            const response = await createEmployee(employeeData);
            if (response === true) {
                alert('Employee added successfully');
                dispatch({ type: 'setEmptyItems' });
            }
        }
    }));

    return (
        <div className={"col-sm-12 form-group text-right"} >
            <button type="button" onClick={props.hideModal} className={"btn btn-danger btn-width mr-3"}>Cancel</button >
            <button type="submit" className={"btn btn-primary btn-width"}>Add</button >
        </div >
    );
})

export default AddEmployee;