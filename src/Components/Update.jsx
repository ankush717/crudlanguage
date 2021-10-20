import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Update = () => {
    var [id, changeid] = useState();
    var [data, updatedata] = useState([]);
    var [fdata, changefdata] = useState({ lname: '', duration: '', trainer: '', fees: '' });
    var [udata, changeudata] = useState({ id: '', lname: '', duration: 0, trainer: '', fees: '' });
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
    function getuData(event) {
        changeudata({ ...udata, [event.target.name]: event.target.value });
    }
    async function submit(event) {
        event.preventDefault();
        var d = await axios.post('https://restp.herokuapp.com/language/', fdata);
        if (d.status === 201) {
            alert('product added sucessfully');
        }
    }
    async function submits(event) {
        event.preventDefault();
        let options = {
            method: 'PUT',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify(udata)
        }
        async function update() {
            var d = await fetch(`https://restp.herokuapp.com/language/${udata.id}/`, options);
            if (d.status === 200) {
                alert("product sucessfully updated");
            }
        }
        update();

    }
    
    return (
        <>
            <div className="container">
               
                <table className="table table-lg bg-dark table-bordered table-hover text-white ">
                    <thead className="bg-warning" >
                        <tr>
                            <th>ID</th>
                            <th>language Name</th>
                            <th>Duration</th>
                            <th>Trainer</th>
                            <th>Fees</th>
                            <th>Update</th>
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
                                    
                                    <td>

                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                                            changeudata(val);
                                        }}>
                                            update
                                        </button>


                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">

                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form action="" onSubmit={submits}>
                                                            <input type="hidden" name="id" value={udata.id} onChange={getuData} />
                                                            <div className="form-group">
                                                                <label>Language Name</label>
                                                                <input type="text" name="lname" value={udata.lname} onChange={getuData} placeholder="please enter product name" class="form-control" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Duration</label>
                                                                <input type="text" name="duration" value={udata.duration} onChange={getuData} placeholder="please enter product price" class="form-control" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Trainer</label>
                                                                <input type="text" name="trainer" value={udata.trainer} onChange={getuData} placeholder="please enter Trainer name" class="form-control" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Fees</label>
                                                                <input type="text" name="fees" value={udata.fees} onChange={getuData} placeholder="please enter product Company" class="form-control" />
                                                            </div>
                                                            <button class="btn btn-primary">Update Records</button>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                    </td>
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
                        <input type="number" name="duration" value={fdata.duration} onChange={getData} placeholder="please enter product price" class="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Trainer</label>
                        <input type="text" name="trainer" value={fdata.trainer} onChange={getData} placeholder="please enter product category" class="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Fees</label>
                        <input type="text" name="fees" value={fdata.fees} onChange={getData} placeholder="please enter product Company" class="form-control" />
                    </div>
                    <button class="btn btn-primary">Add  Students Records</button>
                </form>
            </div>
        </>
    )
}
export default Update;

