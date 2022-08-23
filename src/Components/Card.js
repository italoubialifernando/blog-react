import React from "react";

export function Card({ user, title, body }) {
    return (
        <div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <span className="stars"></span>
                        <p className="text-card">{body}</p>
                    </div>
                </div>
                <div className="face face2">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>

    )
}