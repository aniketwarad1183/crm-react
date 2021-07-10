
const EmployeeList = () => {
    return (
        <div className={"row"}>
            <div className={"col-sm-10"}>
                <h2>Task List</h2>
            </div>
            <div className={"col-sm-2"}>
                <button type="button" data-toggle="modal" data-target="#taskAddModal" className={"btn btn-primary mb-3"}>Add
                    Task
                </button>
            </div>
        </div>
    );
}

export default EmployeeList;