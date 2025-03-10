import React, { useEffect, useState} from "react";
import Nav from "./Nav";
import Resources from "./Resources";
import PageTitle  from "./PageTitle";
import { resources } from '../resources/ressurser.js';

export default function Layout({ children, category }) {

    // useEffect(() => {
    //     resources.find(res => res.category === category);
    // }, [category])


    
    return (
    <>
        <header>
            {/* Får inn komponentene */}
            <Nav />
            {/* <PageTitle category={category}/> */}
        </header>
        <main>
            {children}
        </main>
    </>
    );
}