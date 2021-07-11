import { useEffect, useState } from "react";
import { createLead } from "../../services/lead";

const AddLead = (props) => {

    let lead = props.formData;

    useEffect(() => {
        if (lead !== null) {
            const createEmloyee = async () => {
                const response = await createLead(props.formData);
                if (response === true) {
                    alert('Lead added successfully');
                }
            }
            createEmloyee();
            lead = null;
        }
    }, [lead]);


    return (
        <div className={"col-sm-12 form-group text-right"} >
            <button type="button" className={"btn btn-danger btn-width mr-3"} data-dismiss="modal"> Cancel</button >
            <button type="submit" className={"btn btn-primary btn-width"}>Register</button >
        </div >
    );
}

export default AddLead;