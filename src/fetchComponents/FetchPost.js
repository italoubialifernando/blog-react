import React, { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import { Link } from "react-router-dom";




export function FethcPost() {
    const [data, setData] = useState([])

    const fetchContent = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((r) => r.json())
            .then((data) => setData(data))
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        fetchContent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])






    return (
    <div className="cardContainer">
        {data.map((data) => (
            <Link key={data.id} to={`/${data.id}/${data.userId}`}>
                <Card user={data.userId} key={data.id} title={data.title} body={data.body}  />
            </Link> 
        ))}
    </div>)

}