import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AuthorForm = (props) => {
    // const [name, setName] = useState(props.name) // defaulting state to prop value

    const navigate = useNavigate();

    const [errors, setErrors] = useState([]);



    return (
        <div>
            <form onSubmit={e => props.onSubmitHandler(e)}> {/* on submit call this function and pass in the event that triggered it  // allows it to call e.preventDefault*/}
                {props.errors.map((err, index) => <p key={index}>{err}</p>)}
                <h4>Name: </h4>
                <input type="text" onChange={props.onChangeHandler} value={props.name} />
                <Link to={"/"}><button>Cancel</button></Link>
                <input type="submit" />
            </form>
        </div>
    )
}

export default AuthorForm