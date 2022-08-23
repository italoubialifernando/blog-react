import React from "react";
import { FethcPost } from "../fetchComponents/FetchPost";
import { Header } from "./Header";

export function Home () {
 return(
    <div className="container">
        <Header />
        <FethcPost/>
    </div>
    
 )
}