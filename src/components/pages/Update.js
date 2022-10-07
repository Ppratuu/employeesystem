import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Update() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);

    const sendDataToAPI = () => {
        axios.put(`https://633a436ee02b9b64c60db23e.mockapi.io/crud/${ID}`, {
            firstName,
            lastName
        }).then(()=>{
            navigate('/read');
        })
    }

    useEffect(()=>{
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setID(localStorage.getItem('ID'))
    },[])

    return (
        <div>
            <main className="form-signin w-50 m-auto mt-5 border border-1 shadow-lg p-5">
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input name="fname"
                        value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input name="lname"
                        value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Last Name' />
                    </Form.Field>
                    <Button type='submit' onClick={sendDataToAPI}>Update</Button>
                    <Button> <a href="/read">List</a></Button>
                    <Button> <a href="/signup">LogOut</a></Button>
                    <Button> <a href="/dashboard">Dashboard</a></Button>
                </Form>
            </main>
        </div>
    )
}

