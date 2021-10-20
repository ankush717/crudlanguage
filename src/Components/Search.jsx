
import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {

  var [id, changeid] = useState();
  var [data, updatedata] = useState([]);

  async function show() {

    var d = await axios.get('https://restapittt.herokuapp.com/products/');
    updatedata(d.data);
  }
  async function display() {

    try {

      var d = await axios.get(`https://restapittt.herokuapp.com/products/${id}`);
      updatedata([d.data]);

    } catch (err) {

      window.alert("no record found");
    }



  }
  return (

    <>

      <div className="container">
        <input type="text" name="id" value={id} onChange={(event) => {
          changeid(event.target.value);

        }} />
        <button className="btn btn-danger" onClick={display}>Search</button>

        <table className="table table-lg table-bordered table-striped ">
          {
            data.map((val) => {

              return (
                <tr>

                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.price}</td>
                  <td>{val.cat}</td>
                  <td>{val.cmp}</td>

                </tr>
              )
            })
          }

        </table>
        <button className="btn btn-primary" onClick={show}>Show Data</button>

      </div>
    </>

  )
}

export default Search;
