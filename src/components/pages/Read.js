import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export default function Read() {
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://633a436ee02b9b64c60db23e.mockapi.io/crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (id, firstName, lastName) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
    }

    const getData = () => {
        axios.get(`https://633a436ee02b9b64c60db23e.mockapi.io/crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://633a436ee02b9b64c60db23e.mockapi.io/crud/${id}`)
            .then(() => {
                getData();
            })
    
    }
    const [search, setSearch] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        navigate(`/search?name=${search}`);
        setSearch("");

    }
    return (
        <div>
            <main className="form-signin w-50 m-auto mt-5 border border-1 shadow-lg p-5">
                <form onSubmit={handleSubmit} style={{display:"inline"}}>
                    <input className="form-control me-2" type="search" placeholder="Search Name..." aria-label="Search" />
                </form>
                <br></br>
                <Button> <a href="/create">Add</a></Button>
                <Button> <a href="/signup">LogOut</a></Button>
                <Button> <a href="/dashboard">Dashboard</a></Button>

                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {apiData.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>
                                        <Link to='/update'>
                                            <Button color='green' onClick={() => setData(data.id, data.firstName, data.lastName)}>Update</Button>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button color='red' onClick={() => onDelete(data.id)}>Delete</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </main>
        </div>
    )
}

