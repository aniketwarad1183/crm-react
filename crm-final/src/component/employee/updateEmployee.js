import { forwardRef, useImperativeHandle } from "react";
import { useDispatch } from "react-redux";
import { updateEmployee } from '../../services/employee';


const UpdateEmployee = forwardRef((props, ref) => {

    const dispatch = useDispatch();

    useImperativeHandle(ref, () => ({
        async updateEmployee(employeeData, id) {
            const response = await updateEmployee(employeeData, id);
            if (response === true) {
                alert('Employee updated successfully');
                dispatch({type: 'setEmptyItems' });
            }
        }
    }));

    return (
        <div className={"col-sm-12 form-group text-right"} >
            <button  type="button" onClick={props.hideModal} className={"btn btn-danger btn-width mr-3"}>Cancel</button >
            <button type="submit" className={"btn btn-success btn-width"}>Update</button >
        </div >
    );
})

export default UpdateEmployee;