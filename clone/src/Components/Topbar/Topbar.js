import React from 'react'
import "./Topbar.css"
import { FaBars, FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from "react-icons/fa"
import { BsChatSquareDots } from "react-icons/bs"


const Topbar = () => {

    const addRemove = () => {
        const element = document.getElementById("flasher");
        const lst = element.classList;

        const clssList = String(lst).split(" ");
        console.log(clssList);

        let check = false;

        clssList.map(clasd => {
            clasd == "hidden" ? check = true : check = false
        })

        check ? element.classList.remove("hidden") : element.classList.add("hidden");
    }

    return (
        <div className='topbar'>
            <div className="topbar-left">
                <p><FaFacebookF /></p>
                <p><FaTwitter /></p>
                <p><FaGooglePlusG /></p>
                <p> <FaInstagram /></p>
            </div>
            <div className="topbar-right">
                <div className="menubar">
                    <FaBars id="d" className='menu' onClick={addRemove} />
                </div>
            </div>
            <div className="nav-menu hidden" id='flasher'>
                <FaBars className='nav-bar-menu' onClick={addRemove} />
                <h3>Home</h3>
                <h3>Gallery</h3>
                <h3>Deals</h3>
                <h3>Contact</h3>
            </div>
        </div>
    )
}

export default Topbar
