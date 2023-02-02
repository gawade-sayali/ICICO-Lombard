import React from 'react';
import { Link,NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <div className="container-fluid">
                    <h2>Redux</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-4">
                            <li className="nav-item">
                                <h3 className='m-4'><NavLink to='/' style={({isActive})=>{return{color:isActive? 'red':'black'}}}>Home</NavLink></h3>
                            </li>
                            <li className="nav-item">
                                <h3 className='m-4'><NavLink to='/Listemp' style={({isActive})=>{return{color:isActive? 'red':'black'}}}>Card</NavLink></h3>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to='/AddUser'>
                                <button className="btn btn-outline-success" type="submit">AddUser</button>
                            </Link>
                            <Link to='/Addemp'>
                                <button className="btn btn-outline-success" type="submit">AddEmp</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;