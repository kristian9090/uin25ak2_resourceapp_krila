import React, { useEffect, useState} from "react";
import Nav from "./Nav";
import Resources from "./Resources";
import PageTitle  from "./PageTitle";
import { resources } from '../resources/ressurser.js';

export default function Layout({ children, category }) {

    const [title] = useState("");

    useEffect(() => {
        const currentResource = resources.find(res => res.category === category);
    }, [category])


    
    return (
    <>
        <header>
            {/* Får inn komponentene */}
            <Nav />
        </header>
        <main>
        <PageTitle category={category}/>
            {children}
        </main>
    </>
    );
}