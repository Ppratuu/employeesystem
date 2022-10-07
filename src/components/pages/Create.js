import React, {useState} from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Create() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    console.log(firstName);
    console.log(lastName);

    const sendDataToAPI =()=>{
        axios.post(`https://633a436ee02b9b64c60db23e.mockapi.io/crud`,{
            firstName,
            lastName
        }).then(()=>{
            navigate('/read');
        })
    }

    return (
        <div>
            <main className="form-signin w-50 m-auto mt-5 border border-1 shadow-lg p-5">
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name="lname"
                    onChange={(e) => setLastName(e.target.value)}
                     placeholder='Last Name' />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
                <Button> <a href="/read">List</a></Button>
                <Button> <a href="/signup">LogOut</a></Button>
                <Button> <a href="/dashboard">Dashboard</a></Button>

            </Form>
            </main>
            
        </div>
    )
}

