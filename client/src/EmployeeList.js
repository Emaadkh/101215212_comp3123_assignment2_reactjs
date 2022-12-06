import { useEffect, useState } from "react";

const EmployeeList = () => {
    const [empdata, empdatachange] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/emp/employees/").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
        })
    }, [])
    return (
        <div>
            <div>
                <div>
                    <h3>Employee Listing</h3>
                </div>
                <div>
                    <div>
                        <a>Add New</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Email</td>
                                <td>Gender</td>
                                <td>Salary</td>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item._id}>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.salary}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmployeeList;