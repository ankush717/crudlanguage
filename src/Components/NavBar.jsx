import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar =()=> {

    return (
        
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">

                    <NavLink exact to="/" className="navbar-brand" activeClassName="active">RestApiCrud</NavLink>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink exact to="/" activeClassName="active" className="nav-link active">Home</NavLink>
                            <NavLink exact to="/Add" activeClassName="active" className="nav-link active">Add</NavLink>
                            <NavLink exact to="/Search" activeClassName="active" className="nav-link active" >Search</NavLink>
                            <NavLink exact to="/Update" activeClassName="active" className="nav-link active" >Update</NavLink>
                            <NavLink exact to="/Delete" activeClassName="active" className="nav-link active" >Delete</NavLink>
                            <NavLink exact to="/Language" activeClassName="active" className="nav-link active" >Complte Crud toghter</NavLink>
                            <NavLink exact to="/Main" activeClassName="active" className="nav-link active" >Main</NavLink>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;

