import { forwardRef, useImperativeHandle } from "react";
import { createLead } from "../../services/lead";

const AddLead = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        async createLead(employeeData) {
            const response = await createLead(employeeData);
            if (response === true) {
                alert('Lead added successfully');
                props.callGet();
            }
        }
    }));

    return (
        <div className={"col-sm-12 form-group text-right"} >
            <button type="button" className={"btn btn-danger btn-width mr-3"} data-dismiss="modal"> Cancel</button >
            <button type="submit" className={"btn btn-primary btn-width"}>Register</button >
        </div >
    );
});

export default AddLead;