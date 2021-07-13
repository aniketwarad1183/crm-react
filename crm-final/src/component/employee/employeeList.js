import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../services/employee";
import SingleItem from "./singleItem";

const EmployeeList = () => {

    const dispatch = useDispatch();
    const empStore = useSelector(res => res.items);
    const [employees, setEmployees] = useState(empStore);

    useEffect(() => {
        const fetchEmployee = async () => {
            const response = await getEmployee();
            dispatch({ type: 'items', items: response.items });
            setEmployees(response.items);
        }
        if (empStore.length === 0) {
            fetchEmployee();
        }
    }, [empStore, dispatch]);


    return (
        <div className={'row'}>
            <div className={'col-sm-12'}>
                <table className={"table table-responsive table-hover"}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Designation</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((item) => {
                                return <SingleItem key={item.employee_id} data={item} ></SingleItem>;
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmployeeList;