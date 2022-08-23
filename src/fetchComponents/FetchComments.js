import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Comment } from "../Components/Comment";
import { User } from "../Components/User";



export function FetchComments() {
    const { id, userId } = useParams()
    const [data, setData] = useState([])
    const [user, setUser] = useState([])

    const fetchContent = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((r) => r.json())
            .then((data) => setData(data),)
            .catch((e) => {
                console.log(e)
            })
    }

    const fetchUser = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((r) => r.json())
            .then((data) => setUser(data),)
            .catch((e) => {
                console.log(e)
            })
    }


    useEffect(() => {
        fetchContent();
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="Comments">
            <div className="CommentContainer">
                {data.map((data) => (
                    <Comment
                        name={data.name}
                        key={data.id}
                        email={data.email}
                        body={data.body}
                    />))
                }
            </div>
            <User username={user.username} user={user.name} />
            <Link className="Link-card" to="/"><h1>HOME</h1></Link>
        </div>)
}

