import React, { useState } from 'react'
import desktopImg from "../../assets/img/cj-logo-desktop.png";
import { FcMenu } from 'react-icons/fc';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiBell, BiMessageDetail } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';
import "./navbar.scss";

const languageList = [
    {id: "1", value: "English"},
    {id: "2", value: "Bangla"}
]

function Navbar() {
    const [language, setLanguage] = useState(languageList[0])

  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
                <div className="logo">
                    <img src={desktopImg} alt="" className="logo-mobile"/>
                </div>

                <FcMenu className="icon"/>

                <div className="input">
                    <input type="text" placeholder="Search"/>
                    <AiOutlineSearch className="icon"/>
                </div>
            </div>

            <div className="right">
                <div className="language">
                    <h3>Language</h3>

                    <select onChange={e => setLanguage(languageList.find(lng => lng.id === e.target.value))}>
                        {languageList.map(lng => (
                            <option key={lng.value} value={lng.value}>
                                {lng.value}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="notification">
                    <BiBell className="icon"/>
                </div>

                <div className="message">
                    <BiMessageDetail className="icon"/>
                </div>

                <div className="user">
                    <div className="userImg">
                        <img src="https://source.unsplash.com/iEEBWgY_6lA" alt="" />
                    </div>
                    John Doe
                    <IoMdArrowDropdown className="icon"/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar