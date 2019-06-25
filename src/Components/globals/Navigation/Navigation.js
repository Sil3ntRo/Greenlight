import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

const Navigation = (props) => {
    return (
        <div className="rmdb-navigation">
            <div className="rmdb-navigation">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <p>{props.movie}</p>
            </div>

        </div>
    )
}

export default Navigation;