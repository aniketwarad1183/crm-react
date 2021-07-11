import { forwardRef, useImperativeHandle } from "react";
import { createEmployee } from "../../services/employee";


const AddEmployee = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        async createEmployee(employeeData) {
            const response = await createEmployee(employeeData);
            if (response === true) {
                alert('Employee added successfully');
                props.callGet();
            }
        }
    }));

    return (
        <div className={"col-sm-12 form-group text-right"} >
            <button type="reset" className={"btn btn-danger btn-width mr-3"} > Cancel</button >
            <button type="submit" className={"btn btn-primary btn-width"}>Register</button >
        </div >
    );
});

export default AddEmployee;