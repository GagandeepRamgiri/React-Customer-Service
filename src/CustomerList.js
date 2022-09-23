import React, { useState, useEffect } from 'react'
import axios from 'axios';

const url = "http://3.91.67.254:8001/api/customers"
const CustomerList = () => {

    let [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios
            .get(url, { headers: { Accept: 'application/json' } })
            .then((resp) => resp.data) // response body is accessed via resp.data
            .then((data) => data.customers)
            .then(setCustomers);
    }, []);
    console.log(customers);
    return (
        <>
        <h3>Here is the list of all shipping companies</h3>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Company name</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((cus) => (
                    <tr key={cus.customerId}>
                        <td>{cus.companyName}</td>
                        <td>{cus.contactName}</td>
                        <td>{cus.contactTitle}</td>
                        <td>{cus.streetAddress}</td>
                        <td>{cus.city}</td>
                        <td>{cus.region}</td>
                        <td>{cus.country}</td>
                        <td>{cus.postalCode}</td>
                        <td>{cus.phone}</td>
                        <td>{cus.fax}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}

export default CustomerList
