import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthorTable from '../components/AuthorTable';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

const Home = (props) => {

    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data);
                setAuthors(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <Header />
            <Link to="/new">Add a new Author</Link>
            <h3>We have quotes by:</h3>
            {loaded && <AuthorTable authors = {authors} />} {/* if loaded is true it will return our authortable jsx */}
        </div>
    )
}

export default Home