import { useEffect, useState } from "react";
import { createEmployee } from "../../services/employee";

const AddEmployee = (props) => {

    let employee = props.formData;

    useEffect(() => {
        if (employee !== null) {
            const createEmloyee = async () => {
                const response = await createEmployee(props.formData);
                if (response === true) {
                    alert('Employee added successfully');
                }
            }
            createEmloyee();
            employee = null;
        }
    }, [employee]);


    return (
        <div className={"col-sm-12 form-group text-right"} >
            <button type="button" className={"btn btn-danger btn-width mr-3"} data-dismiss="modal"> Cancel</button >
            <button type="submit" className={"btn btn-primary btn-width"}>Register</button >
        </div >
    );
}

export default AddEmployee;