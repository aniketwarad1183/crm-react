import { createStore } from "redux";

const employeeStore = (state = { items: [], showAddForm: null, employeeDataForUpdate: null, deleteId: null }, action) => {

    if (action.type === 'items') {
        return { ...state, items: action.items };
    }
    if (action.type === 'showForm') {
        return {
            ...state,
            showAddForm: true
        };
    }
    if (action.type === 'updateDateForEmployee') {
        return {
            ...state,
            showAddForm: false,
            employeeDataForUpdate: action.employeeDataForUpdate,
        };
    }
    if (action.type === 'setEmptyItems') {
        console.log("Items empty");
        return {
            deleteId: null,
            items: [],
            showAddForm: null,
            employeeDataForUpdate: null
        };
    }
    if (action.type === 'deletedId') {
        return {
            ...state,
            deleteId: action.deleteId
        };
    }
    return state;
};

const store = createStore(employeeStore);

export default store;
