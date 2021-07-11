import { Fragment, useRef } from "react";
import AddEmployee from "./add-employee";
import UpdateEmployee from "./update-employee";

const EmployeeForm = (props) => {

    const addEmployeeChildRef = useRef();
    const updateEmployeeChildRef = useRef();

    const first_name = useRef();
    const last_name = useRef();
    const email = useRef();
    const mobile = useRef();
    const designation = useRef();
    const city_id = useRef();
    const state = useRef();
    const country = useRef();
    const gender = useRef();
    const address = useRef();
    const zipcode = useRef();

    if (props.formDataForUpdate !== null) {
        console.log(props.formDataForUpdate);
        first_name.current.value = props.formDataForUpdate.first_name;
        last_name.current.value = props.formDataForUpdate.last_name;
        email.current.value = props.formDataForUpdate.email;
        mobile.current.value = props.formDataForUpdate.mobile;
        designation.current.value = props.formDataForUpdate.designation;
        city_id.current.value = props.formDataForUpdate.city_id;
        state.current.value = props.formDataForUpdate.state_id;
        country.current.value = props.formDataForUpdate.country_id;
        gender.current.value = props.formDataForUpdate.gender;
        address.current.value = props.formDataForUpdate.address;
        zipcode.current.value = props.formDataForUpdate.zipcode;
    }

    const submitEmployeeHandler = (event, form) => {
        event.preventDefault();

        const employeeData = {
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            designation: designation.current.value,
            city_id: city_id.current.value,
            gender: gender.current.value,
            address: address.current.value,
            zipcode: zipcode.current.value
        }

        if (props.formDataForUpdate !== null) {
            updateEmployeeChildRef.current.updateEmployee(employeeData, props.formDataForUpdate.employee_id);

        } else {
            addEmployeeChildRef.current.createEmployee(employeeData);
        }

        first_name.current.value = "";
        last_name.current.value = "";
        email.current.value = "";
        mobile.current.value = "";
        designation.current.value = "";
        city_id.current.value = 'null';
        gender.current.value = 'null';
        gender.current.value = 'null';
        state.current.value = 'null';
        country.current.value = 'null';
        address.current.value = "";
        zipcode.current.value = "";
    }

    return (
        <Fragment>
            <div className={"modal fade"} id="EmployeeFormModal" role="dialog">
                <div className={"modal-dialog modal-lg"}>
                    <div className={"modal-content"}>

                        <div className={"modal-header"}>
                            <h4 className={"modal-title"}>Add Contact</h4>
                            <button type="button" className={"close"} data-dismiss="modal">
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitEmployeeHandler}>
                                <div className={"row"} id="registrationdiv">
                                    <div className={"col-sm-6 form-group"}                           >
                                        <label>First Name:</label>
                                        <input type="text" className={"form-control"}
                                            placeholder="Enter first name" ref={first_name} />
                                        {/* <span>First name is required</span>
                                        <span>Enter valid first name</span> */}
                                    </div>
                                    <div className={"col-sm-6 form-group"}>
                                        <label>Last Name:</label>
                                        <input type="text" className={"form-control"}
                                            placeholder="Enter last name" ref={last_name} />
                                        {/* <span>Last name is required</span>
                                        <span>Enter valid last name</span> */}
                                    </div>
                                    <div className={"col-sm-6 form-group"}>
                                        <label>Email:</label>
                                        <input type="text" className={"form-control"} placeholder="Enter email" ref={email} />
                                        {/* <span  >
                                            Email is required
                                        </span >
                                        <span >
                                            Enter valid email
                                        </span > */}
                                    </div >
                                    <div className={"col-sm-6 form-group"}>
                                        <label>Mobile:</label>
                                        <input type="text" maxLength="10" className={"form-control"}
                                            placeholder="Enter mobile number" ref={mobile} />
                                        {/* <span                               >
                                            Mobile number is required
                                        </span >
                                        <span >
                                            Enter valid mobile number
                                        </span > */}
                                    </div >
                                    <div className={"col-sm-6 form-group"}>
                                        <label>Designation:</label>
                                        <input type="text" className={"form-control"}
                                            placeholder="Enter Designation" ref={designation} />
                                        {/* <span >
                                            Designation is required
                                        </span >
                                        <span >
                                            Enter valid designation
                                        </span > */}
                                    </div >
                                    <div className={"col-sm-6 form-group"}>
                                        <label>Gender:</label>
                                        <select className={"form-control"} ref={gender}>
                                            <option value='null'>-- Select Gender --</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                            <option value="O">Other</option>
                                        </select >
                                        {/* <span >
                                            Gender is required
                                        </span > */}
                                    </div >
                                    <div className={"col-sm-6 form-group"}>
                                        <label>Country:</label>
                                        <select className={"form-control"} ref={country}>
                                            <option value='null'>-- Select Country --</option>
                                            <option value="1">India</option>
                                        </select >
                                        {/* <span >
                                            Country is required
                                        </span > */}
                                    </div >
                                    <div className={"col-sm-6 form-group"} >
                                        <label>State:</label>
                                        <select className={"form-control"} ref={state}>
                                            <option value='null'>-- Select State --</option>
                                            <option value="1">Maharashtra</option>
                                            <option value="2">Gujrat</option>
                                            <option value="3">Panjab</option>
                                            <option value="4">Bihar</option>
                                        </select >
                                        {/* <span  >
                                            State is required
                                        </span > */}
                                    </div >
                                    <div className={"col-sm-6 form-group"}>
                                        <label>City:</label>
                                        <select className={"form-control"} ref={city_id}>
                                            <option value='null'>-- Select City --</option>
                                            <option value="7">Solapur</option>
                                            <option value="1">Pune</option>
                                            <option value="2">Mumbai</option>
                                            <option value="3">Surat</option>
                                        </select >
                                        {/* <span>
                                            City is required
                                        </span > */}
                                    </div >
                                    <div className={"col-sm-6 form-group"}>
                                        <label>Zip Code:</label>
                                        <input type="text" className={"form-control"}
                                            placeholder="Enter Zip code" ref={zipcode} />
                                        {/* <span >
                                            Zip code is required
                                        </span >
                                        <span >
                                            Enter valid Zip code
                                        </span > */}
                                    </div >
                                    <div className={"col-sm-12 form-group"}>
                                        <label>Address:</label>
                                        <textarea rows="3" className={"form-control"}
                                            placeholder="Enter Address" ref={address} ></textarea>
                                        {/* <span>
                                            Address is required
                                        </span > */}
                                    </div >
                                    {!props.isUpdate && <AddEmployee ref={addEmployeeChildRef} />}
                                    {props.isUpdate && <UpdateEmployee ref={updateEmployeeChildRef} />}
                                </div >
                            </form >
                        </div >
                    </div >
                </div >
            </div >
        </Fragment >
    );
}

export default EmployeeForm;