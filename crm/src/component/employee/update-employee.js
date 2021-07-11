import { forwardRef, useImperativeHandle } from "react";
import { updateEmployee } from "../../services/employee";


const UpdateEmployee = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        async updateEmployee(employeeData, id) {
            console.log(employeeData);
            const response = await updateEmployee(employeeData, id);
            if (response === true) {
                alert('Employee updated successfully');
            }
            
        }
    }));
    return (
        <div className={"col-sm-12 form-group text-right"} >
            <button type="reset" className={"btn btn-danger btn-width mr-3"} > Cancel</button >
            <button type="submit" className={"btn btn-primary btn-width"} >Update</button >
        </div >
    );
});

export default UpdateEmployee;