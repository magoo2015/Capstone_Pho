import React, { useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import useAuth from '../../hooks/useAuth';
import Admin from '../../components/AdminPage/Admin';
import axios from 'axios';

const AdminPage = () => {
    const [customers, setCustomers] = useState([]);
    const [find, setFind] = useState('')

    async function getAllCustomers(){
        const response = await axios.get('http://127.0.0.1:8000/api/customers/');
        console.log(response.data);
        setCustomers(response.data)
    }

    function searchCustomers(event){
        event.preventDefault();

        let response = customers.filter((customer) => {
            if (customer.city.includes(find) ||
                customer.state.includes(find) ||
                customer.zip.includes(find) ||
                customer.food_preference.includes(find)) {
                    return true;
                }
                else {
                    return false;
                }
        });
        setCustomers(response)
    }

    useEffect(()=>{
        getAllCustomers();
    }, {})


    return (
        <div>
            <div className='Admin'>
            <form onSubmit={searchCustomers}>
                <div className='customer-search'>
                    <label>Customer Data Search</label>
                    <input type='text' value={find} onChange={(event) => setFind(event.target.value)} />
                    <button type='submit'>Filter Search</button>
                </div>
            </form>       
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
                                
                                <tr>
                                    <td>{customer.first_name}</td>
                                    <td>{customer.last_name}</td>
                                    <td>{customer.city}</td>
                                    <td>{customer.state}</td>
                                    <td>{customer.zip}</td>
                                    <td>{customer.food_preference}</td>
                                </tr>
                                
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
      );
}
 
export default AdminPage;