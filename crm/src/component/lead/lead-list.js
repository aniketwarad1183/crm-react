import { Fragment, useEffect, useState } from "react";
import LeadForm from "./lead-form";
import { getLead, getSingleLead, deleteLead } from '../../services/lead';
import React from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


const LeadList = () => {

    const [addForm, setAddForm] = useState(false);
    const [lead, setLead] = useState([]);
    const [updatedFormData, setUpdatedFormData] = useState(null);

    const addLeadForm = () => {
        setAddForm(true);
    };

    const updateLeadHandler = async (id) => {
        const data = await getSingleLead(id);
        setUpdatedFormData(data);
        setAddForm(true);
    };

    const deleteLeadHandler = async (id) => {
        const data = await deleteLead(id);
        if (data === true) {
            alert('Lead deleted successfully!');
        }
        window.location.reload(true);
    };

    useEffect(() => {

        const fetchLead = async () => {
            const data = await getLead();
            let index = 1;
            const tblLead = [];
            data.map((item) => {
                const temp = (
                    <tr key={item.lead_id}>
                        <td>{index++}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.address}, {item.city}</td>
                        <td className={"table-buttonicon"}>
                            <span style={{ "color": " #007BFF" }} data-toggle="modal" data-target="#LeadFormModal"
                                onClick={() => updateLeadHandler(item.lead_id)} className={"fa fa-pencil mr-2"} ><EditOutlinedIcon /></span>
                            <span style={{ "color": "red" }} data-toggle="modal" data-target="#deleteModal"
                                onClick={() => deleteLeadHandler(item.lead_id)} className={"fa fa-trash"}> <DeleteOutlinedIcon /></span>
                        </td>
                    </tr >);
                tblLead.push(temp);
                return null;
            });
            setLead(tblLead);
        };
        fetchLead();
    }, []);


    return (
        <Fragment>
            <div className={"row"}>
                <div className={"col-sm-10"}>
                    <h2>Leads List</h2>
                </div>
                <div className={"col-sm-2 text-right"}>
                    <button type="button" onClick={addLeadForm} data-toggle="modal" data-target="#LeadFormModal" className={"btn btn-primary mb-3"}>
                        Add Leads
                    </button>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-sm-12'}>
                    <table className={"table table-responsive table-hover"}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead >
                        <tbody>
                            {lead}
                        </tbody>
                    </table>
                </div>
            </div>
            <LeadForm isUpdate={addForm} formDataForUpdate={updatedFormData} />
        </Fragment>
    );
};

export default LeadList;