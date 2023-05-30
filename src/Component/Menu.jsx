import React from 'react'
import { Link } from 'react-router-dom'
function Menu() {
    return (
        <div className="container my-4">
            <h1 className="text-center bg-secondary text-light">HOT ACCESSORIES</h1>
            <ul class="nav justify-content-center  nav-underline ">
                <li class="nav-item">
                    <Link class="nav-link text-dark" to="/MI_CLONE">Music Store</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link text-dark" to="/smart">Smart Device</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link text-dark" to="/home">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link text-dark" to="/life">Lifestyle</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link text-dark" to="/mobile">Mobile Accessories</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu
