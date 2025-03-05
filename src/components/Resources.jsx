import React from "react";
import { resources } from '../resources/ressurser.js'



export default function Resources({ category }) {

    console.log("Category:", category);
    console.log("Resources:", resources);

    
    return (
        <section>
           <p>{resources.url}</p>
           <p>{resources.category}</p>
        </section>
    )
}