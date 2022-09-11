import React, {useState} from "react";
import Button from "../Button/Button"
import "./Navbar.css";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const navLinks = [
        {title: "Home", className:"nav-link", url: "#"},
        {title: "About", className:"nav-link", url: "#"},
        {title: "Products", className:"nav-link", url: "#"},
        {title: "Contact Us", className:"nav-link", url: "#"},
        {title: "Sign Up", className: "nav-link-mobile", url: "#"}  
    ]

    const onToggle = () => setToggle(!toggle);

    return (
        <nav className="navbar">
            <h1 className="nav-header">Navbar Header</h1>
            <div onClick={onToggle} className="menu-icon">
                {toggle 
                ? <div>&#x78;</div> 
                : <div>&#x2630;</div>
                }
            </div>
            <ul className={`nav-menu ${toggle ? "active" : "hidden"}`}>
                {navLinks.map((link) => (
                    <li key={link.title}>
                        <a className={link.className} href={link.url}>{link.title}</a>
                    </li>
                ))}
            </ul>
            <Button buttonStyle="btn-primary">Sign Up</Button>
        </nav>
    );
}

export default Navbar