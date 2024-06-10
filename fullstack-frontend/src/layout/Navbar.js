// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">Student Management Application</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     <Link className="btn btn-outline-light" to="/adduser">
//                         Add User
//                     </Link>
//                 </div>
//             </nav>
//         </div>
//     )
// }


import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the custom CSS file

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand custom-brand" href="#">Employee Management Application</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon custom-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active custom-link" aria-current="page" to="/"></Link>
                            </li>
                        </ul>
                        <Link className="btn custom-btn" to="/adduser">
                            Add User
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
