import React from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

const Create = (props) => {

    const navigate = useNavigate();

    const [name, setName] = useState("") // defaulting state to prop value

    const [errors, setErrors] = useState([]);

    const newAuthor = {
        name
    }



    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", newAuthor)
            .then(res => {
                console.log(res.data);
                console.log("Response: ", res);
                navigate("/");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages 
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    const onChangeHandler = e => {
        e.preventDefault();
        setName(e.target.value)
    }


    return (
        <div>
            <Header />
            <Link to="/">Home</Link>
            <h3>Add a new author</h3>
            <AuthorForm name={name} onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} errors={errors} /> {/* When we go to create name defaults to an empty string  */}
        </div>
    )
}

export default Create