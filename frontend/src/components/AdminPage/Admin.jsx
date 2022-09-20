import React, { useState } from 'react';

const Admin = (props) => {
    const [find, setFind] = useState('')

    function searchCustomers(event){
        event.preventDefault();

        let response = props.customers.filter((customer) => {
            if (customer.city.includes(find) ||
                customer.state.includes(find) ||
                customer.zip.includes(find)) {
                    return true;
                }
                else {
                    return false;
                }
        });
        props.setCustomers(response)
    }

    
    return (
            <form onSubmit={searchCustomers}>
                <div className='customer-search'>
                    <label>Customer Data Search</label>
                    <input type='text' value={find} onChange={(event) => setFind(event.target.value)} />
                    <button type='submit'>Filter Search</button>
                </div>
            </form>       
    );
}
 
export default Admin;



