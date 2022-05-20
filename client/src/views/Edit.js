import React from 'react'
import Header from '../components/Header'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Edit = (props) => {

    const { id } = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const [errors, setErrors] = useState([])

    const updatedAuthor = {
        name
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.name);
            })
    }, [id]);


    const onSubmitHandlerUpdatedAuthor = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, updatedAuthor)
            .then(res => {
                console.log(res.data);
                console.log("CLIENT SUCCESS");
                navigate("/", {replace: true});
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages 
                    errorArr.push(errorResponse[key].message)
                    console.log(errorArr)
                }
                // Set Errors
                setErrors(errorArr);
            })
        }

        const onChangeHandler = e => {
            setName(e.target.value)
        }

    return (
            <div>
                <Header />
                <Link to="/">Home</Link>
                <h3>Update a new author</h3>
                {<AuthorForm name ={name} onSubmitHandler = {onSubmitHandlerUpdatedAuthor} onChangeHandler ={onChangeHandler} errors = {errors}/>} {/* waiting to render authorform until we have a name  */}
            </div>
        )
    }


    export default Edit;
