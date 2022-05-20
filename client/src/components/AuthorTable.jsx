import axios from 'axios'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


const AuthorTable = (props) => {

    const [authors, setAuthors] = useState([])
    // const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    const deleteAuthor = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(res => {
                // console.log(res)
                console.log(res.data);
                console.log(res)
                console.log("DELETE SUCCESS!");
                setAuthors(authors.filter(author => author !== deleteId));
                navigate("/render")
            })
            .catch(err => console.log(err))
    }

    return (
        <table >
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {props.authors.map((authorName, index) => {
                    return (
                        <tr key={index}>
                            <td>{authorName.name}</td>
                            <td><Link to={`/edit/${authorName._id}`}><button>Edit</button></Link></td>
                            <td><button onClick= {() => deleteAuthor(authorName._id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default AuthorTable