import React, { useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import useAuth from '../../hooks/useAuth';
import Admin from '../../components/AdminPage/Admin';
import axios from 'axios';

const AdminPage = () => {
    const [customers, setCustomers] = useState([]);

    async function getAllCustomers(){
        const response = await axios.get('http://127.0.0.1:8000/api/customers/');
        console.log(response.data);
        setCustomers(response.data)
    }

    useEffect(() => {
        getAllCustomers();
      }, []);
    


    return (
        <div>
            <div className='Admin'>
                <Admin customers={customers} setCustomers={setCustomers}/>
            </div>
            <div className='customer-container'>
                <table className='customer-table'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Food Preference</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => {
                            return (
                                <div className='cust-table' key={customer.id}>
                                    <tr>
                                        <td>{customer.first_name}</td>
                                        <td>{customer.last_name}</td>
                                        <td>{customer.city}</td>
                                        <td>{customer.state}</td>
                                        <td>{customer.zip}</td>
                                        <td>{customer.food_preference}</td>
                                </tr>
                                </div>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
      );
}
 
export default AdminPage;