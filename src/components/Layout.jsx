import React, { useEffect, useState} from "react";
import Nav from "./Nav";
import Resources from "./Resources";
import PageTitle  from "./PageTitle";
import { resources } from '../resources/ressurser.js';
import '../styles/layout.scss';

export default function Layout({ children, category }) {


    
    return (
    <>
        <header>
            {/* Får inn komponentet nav */}
            <Nav />
        </header>
        <main>
            {children}
        </main>
    </>
    );
}