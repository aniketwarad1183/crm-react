import { forwardRef, useImperativeHandle } from "react";
import { updateLead } from "../../services/lead";


const UpdateLead = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        async updateLead(leadData, id) {
            console.log(leadData);
            const response = await updateLead(leadData, id);
            if (response === true) {
                alert('Lead updated successfully!');
            }
            window.location.reload(true);
        }
    }));
    return (
        <div className={"col-sm-12 form-group text-right"} >
            <button type="reset" className={"btn btn-danger btn-width mr-3"}>Cancel</button >
            <button type="submit" className={"btn btn-primary btn-width"}>Update</button >
        </div >
    );
});

export default UpdateLead;