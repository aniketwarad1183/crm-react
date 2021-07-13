import { useRef } from "react";
import { useSelector } from "react-redux";
import AddEmployee from "./addEmployee";
import UpdateEmployee from "./updateEmployee";

const EmployeeForm = (props) => {

    const empShowForm = useSelector(res => res.showAddForm);
    const empDataForUpdate = useSelector(res => res.employeeDataForUpdate);

    const addEmployeeButtonRef = useRef();
    const updateEmployeeButtonRef = useRef();

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

    if (empDataForUpdate !== null) {
        first_name.current.value = empDataForUpdate.first_name;
        last_name.current.value = empDataForUpdate.last_name;
        email.current.value = empDataForUpdate.email;
        mobile.current.value = empDataForUpdate.mobile;
        designation.current.value = empDataForUpdate.designation;
        city_id.current.value = empDataForUpdate.city_id;
        state.current.value = empDataForUpdate.state_id;
        country.current.value = empDataForUpdate.country_id;
        gender.current.value = empDataForUpdate.gender;
        address.current.value = empDataForUpdate.address;
        zipcode.current.value = empDataForUpdate.zipcode;
    }

    const clearForm = () => {
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
        document.getElementById('EmployeeFormModal').style.display = 'none';
        document.getElementsByClassName('modal-backdrop').item(0).remove();
        document.getElementById('body').setAttribute('class', '');
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const formData = {
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            designation: designation.current.value,
            city_id: city_id.current.value,
            gender: gender.current.value,
            address: address.current.value,
            zipcode: zipcode.current.value
        };
        if (empDataForUpdate !== null) {
            updateEmployeeButtonRef.current.updateEmployee(formData, empDataForUpdate.employee_id);
        } else {
            addEmployeeButtonRef.current.createEmployee(formData);
        }
        clearForm();
    }


    return (
        <div className={"modal fade"} id="EmployeeFormModal" role="dialog">
            <div className={"modal-dialog modal-lg"}>
                <div className={"modal-content"}>
                    <div className={"modal-header"}>
                        <h4 className={"modal-title"}>Add Employee</h4>
                        <button type="button" className={"close"} data-dismiss="modal">
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={formSubmitHandler}>
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
                                {empShowForm && <AddEmployee hideModal={clearForm} ref={addEmployeeButtonRef} />}
                                {!empShowForm && <UpdateEmployee hideModal={clearForm} ref={updateEmployeeButtonRef} />}
                            </div >
                        </form >
                    </div >
                </div >
            </div >
        </div >
    );
}

export default EmployeeForm;