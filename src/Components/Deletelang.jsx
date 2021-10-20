import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Deletelang = () => {
    var [id, changeid] = useState();
    var [data, updatedata] = useState([]);
    var [fdata, changefdata] = useState({ lname: '', duration: '', trainer: '', fees: '' });
    useEffect(
        () => {
            async function show() {
                var d = await axios.get('https://restp.herokuapp.com/language/');
                updatedata(d.data);
            }
            show();
        }
    )
    function getData(event) {
        changefdata({ ...fdata, [event.target.name]: event.target.value });
    }

    async function submit(event) {
        event.preventDefault();
        var d = await axios.post('https://restp.herokuapp.com/language/', fdata);
        if (d.status === 201) {
            alert('record added sucessfully');
        }
    }
    
    async function display() {
        try {
            var d = await axios.get(`https://restp.herokuapp.com/language/${id}`);

            updatedata([d.data]);
        } catch (err) {
            window.alert("no records found");
        }
    }
    
    return (
        <>
            <div className="container">
               
                <table className="table table-lg table-bordered backtab bg-dark text-light">
                    <thead className="bg-warning">
                        <tr>
                            <th>ID</th>
                            <th>Language Name</th>
                            <th>Duration</th>
                            <th>Trainer</th>
                            <th>Fees</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val) => {
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.lname}</td>
                                    <td>{val.duration}</td>
                                    <td>{val.trainer}</td>
                                    <td>{val.fees}</td>
                                    <td><button className="btn btn-danger" onClick={() => {
                                        async function deletes() {
                                            var d = await axios.delete(`https://restp.herokuapp.com/language/${val.id}`);
                                            if (d.status === 204) {
                                                alert('product deleted successfully');
                                            }
                                        }
                                        deletes();
                                    }}>Delete</button></td>
                                  
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <form action="" onSubmit={submit}>
                    <div className="form-group">
                        <label>Language Name</label>
                        <input type="text" name="lname" value={fdata.lname} onChange={getData} placeholder="please enter product name" class="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Duration</label>
                        <input type="text" name="duration" value={fdata.duration} onChange={getData} placeholder="please enter product price" class="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Trainer</label>
                        <input type="text" name="trainer" value={fdata.trainer} onChange={getData} placeholder="please enter product category" class="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Fees</label>
                        <input type="text" name="fees" value={fdata.fees} onChange={getData} placeholder="please enter product Company" class="form-control" />
                    </div>
                    <button class="btn btn-primary">Add Product</button>
                </form>
            </div>
        </>
    )
}
export default Deletelang;

