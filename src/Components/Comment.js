import React from "react";

export function Comment({ name, email, body }) {
    return (
        <div className="cardCommnet">
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    )
}