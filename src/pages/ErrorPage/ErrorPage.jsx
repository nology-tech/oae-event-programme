import React from 'react'
import { Link } from 'react-router-dom';
import "./ErrorPage.scss"

const ErrorPage = (props) => {
    const {eventId} = props;
    return (
        <div>
            <h1>Oops. Looks like this page doesnt exist.</h1>
            <Link to={`/${eventId}/home`}>Back to Website</Link>
        </div>
    )
}

export default ErrorPage;
