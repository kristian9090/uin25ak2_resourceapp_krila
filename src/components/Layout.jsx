import React from "react";
import Nav from "./Nav";
import Resources from "./Resources";
import PageTitle  from "./PageTitle";

export default function Layout({ children }) {
    return (
    <>
        <header>
            {/* Får inn komponentene */}
            <PageTitle />
            <Nav />
        </header>
        <main>
            {children}
        </main>
    </>
    );
}