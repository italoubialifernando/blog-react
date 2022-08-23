import React from "react";

export function User({ username, user }) {
    return (
        <div className="userContainer" >
            <h4 className="username">Username:{username}</h4>
            <p className="user">Name:{user}</p>
        </div>

    )
}