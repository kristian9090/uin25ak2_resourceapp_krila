import React from "react";
import {resources} from ../resources/ressurser.js";

export default function Nav({resources}) {
return (
   <nav>
        <ul>
            <li>
                <a href={resources.url}></a>
            </li>
        </ul>
   </nav>
)
}