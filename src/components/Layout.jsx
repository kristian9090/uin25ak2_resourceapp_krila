import React from "react";
import Nav from "./Nav";
import Resources from "./Resources";
import PageTitle  from "./PageTitle";
import { resources } from '../resources/ressurser.js';

export default function Layout({ children, category, title }) {
    return (
    <>
        <header>
            {/* Får inn komponentene */}
            <Nav />
        </header>
        <main>
        <PageTitle category={category} title={title} />
            {children}
        </main>
    </>
    );
}