// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";

// export default function Home() {
//     const [users, setUsers] = useState([]);

//     const { id } = useParams();

//     useEffect(() => {
//         loadUsers();
//     }, []);

//     const loadUsers = async () => {
//         const result = await axios.get("http://localhost:8080/users");
//         setUsers(result.data);
//     };

//     const deleteUser = async (id) => {
//         await axios.delete(`http://localhost:8080/user/${id}`);
//         loadUsers();
//     };

//     return (
//         <div className="container">
//             <div className="py-4">
//                 <table className="table border shadow">
//                     <thead>
//                         <tr>
//                             <th scope="col">S.N</th>
//                             <th scope="col">Name</th>
//                             <th scope="col">Username</th>
//                             <th scope="col">Email</th>
//                             <th scope="col">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr>
//                                 <th scope="row" key={index}>
//                                     {index + 1}
//                                 </th>
//                                 <td>{user.name}</td>
//                                 <td>{user.userName}</td>
//                                 <td>{user.email}</td>
//                                 <td>
//                                     <Link
//                                         className="btn btn-primary mx-2"
//                                         to={`/viewuser/${user.id}`}
//                                     >
//                                         View
//                                     </Link>
//                                     <Link
//                                         className="btn btn-outline-primary mx-2"
//                                         to={`/edituser/${user.id}`}
//                                     >
//                                         Edit
//                                     </Link>
//                                     <button
//                                         className="btn btn-danger mx-2"
//                                         onClick={() => deleteUser(user.id)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }




// ************* New Design Applying Pagenation ***************************** //
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";

// export default function Home() {
//     const [users, setUsers] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [usersPerPage] = useState(10);

//     const { id } = useParams();

//     useEffect(() => {
//         loadUsers();
//     }, []);

//     const loadUsers = async () => {
//         const result = await axios.get("http://localhost:8080/users");
//         setUsers(result.data);
//     };

//     const deleteUser = async (id) => {
//         await axios.delete(`http://localhost:8080/user/${id}`);
//         loadUsers();
//     };

//     // Get current users
//     const indexOfLastUser = currentPage * usersPerPage;
//     const indexOfFirstUser = indexOfLastUser - usersPerPage;
//     const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     const totalPages = Math.ceil(users.length / usersPerPage);

//     return (
//         <div className="container">
//             <div className="py-4">
//                 <table className="table border shadow">
//                     <thead>
//                         <tr>
//                             <th scope="col">S.N</th>
//                             <th scope="col">Name</th>
//                             <th scope="col">Username</th>
//                             <th scope="col">Email</th>
//                             <th scope="col">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentUsers.map((user, index) => (
//                             <tr key={index}>
//                                 <th scope="row">{indexOfFirstUser + index + 1}</th>
//                                 <td>{user.name}</td>
//                                 <td>{user.userName}</td>
//                                 <td>{user.email}</td>
//                                 <td>
//                                     <Link
//                                         className="btn btn-primary mx-2"
//                                         to={`/viewuser/${user.id}`}
//                                     >
//                                         View
//                                     </Link>
//                                     <Link
//                                         className="btn btn-outline-primary mx-2"
//                                         to={`/edituser/${user.id}`}
//                                     >
//                                         Edit
//                                     </Link>
//                                     <button
//                                         className="btn btn-danger mx-2"
//                                         onClick={() => deleteUser(user.id)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <nav>
//                     <ul className="pagination">
//                         {[...Array(totalPages)].map((_, index) => (
//                             <li key={index} className="page-item">
//                                 <button
//                                     onClick={() => paginate(index + 1)}
//                                     className="page-link"
//                                 >
//                                     {index + 1}
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>
//             </div>
//         </div>
//     );
// }








import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState("");

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter users based on search query
    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    return (
        <div className="container">
            <div className="py-4">
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control w-25"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.N</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{indexOfFirstUser + index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        to={`/viewuser/${user.id}`}
                                    >
                                        View
                                    </Link>
                                    <Link
                                        className="btn btn-outline-primary mx-2"
                                        to={`/edituser/${user.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger mx-2"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav>
                    <ul className="pagination">
                        {[...Array(totalPages)].map((_, index) => (
                            <li key={index} className="page-item">
                                <button
                                    onClick={() => paginate(index + 1)}
                                    className="page-link"
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div >
    );
}
