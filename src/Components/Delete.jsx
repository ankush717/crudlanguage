import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Delete.css';
const Delete = () => {
    var [id, changeid] = useState();
    var [data, updatedata] = useState([]);
    var [fdata, changefdata] = useState({ name: '', price: 0, cat: '', cmp: '' });
    // var [udata, changeudata] = useState({ id: '', name: '', price: 0, cat: '', cmp: '' });
    useEffect(
        () => {
            async function show() {
                var d = await axios.get('https://restapittt.herokuapp.com/products/');
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
        var d = await axios.post('https://restapittt.herokuapp.com/products/', fdata);
        if (d.status === 201) {
            alert('product added sucessfully');
        }
    }
    
    async function display() {
        try {
            var d = await axios.get(`https://restapittt.herokuapp.com/products/${id}`);

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
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>COMPANY</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val) => {
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.price}</td>
                                    <td>{val.cat}</td>
                                    <td>{val.cmp}</td>
                                    <td><button className="btn btn-danger" onClick={() => {
                                        async function deletes() {
                                            var d = await axios.delete(`https://restapittt.herokuapp.com/products/${val.id}`);
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
                        <label>Product Name</label>
                        <input type="text" name="name" value={fdata.name} onChange={getData} placeholder="please enter product name" class="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="number" name="price" value={fdata.price} onChange={getData} placeholder="please enter product price" class="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Product Category</label>
                        <input type="text" name="cat" value={fdata.cat} onChange={getData} placeholder="please enter product category" class="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Product Company</label>
                        <input type="text" name="cmp" value={fdata.cmp} onChange={getData} placeholder="please enter product Company" class="form-control" />
                    </div>
                    <button class="btn btn-primary">Add Product</button>
                </form>
            </div>
        </>
    )
}
export default Delete;

