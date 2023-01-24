import React, { useState } from 'react'
import desktopImg from "../../assets/img/cj-logo-desktop.png";
import { FcMenu } from 'react-icons/fc';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiBell, BiMessageDetail } from 'react-icons/bi';
import {subMenu} from "../../data/userData";
import { IoMdArrowDropdown } from 'react-icons/io';
import "./navbar.scss";
import {notificData} from "../../data/notificdata";
import Notificard from '../notificard/Notificard';

const languageList = [
    {id: "1", value: "English"},
    {id: "2", value: "Bangla"}
]

function Navbar() {
    const [language, setLanguage] = useState(languageList[0])
    const [showMenu, setShowMenu] = useState(false)
    const [showNotific, setShowNotific] = useState(false)

    const handleClick = () =>{
        setShowMenu(!showMenu)
    }

    const handleShowNotific = () =>{
        setShowNotific(!showNotific)
    }

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
                    <p>4</p>
                </div>

                <div className="message">
                    <BiMessageDetail className="icon" onClick={handleShowNotific}/>
                    <p className="notificnumber">3</p>
                    
                    {showNotific && 
                        (   
                            <div className="notficationArea">
                                <div className="topmenu">
                                    <p>You have 4 new message</p>
                                    <p className="view">View all</p>
                                </div>

                                <ul className="notification">
                                    {notificData.map((notific, index) => {
                                        return(
                                            <Notificard key={index} data={notific}/>
                                        )
                                    })}
                                </ul>

                                <p className="showall">Show all message</p>
                            </div>
                        )
                    }
                    
                </div>

                <div className="user">
                    <div className="userImg">
                        <img src="https://source.unsplash.com/iEEBWgY_6lA" alt="" />
                    </div>

                    John Doe

                    <div className="menuBtn">
                        <IoMdArrowDropdown className="icon" onClick={handleClick}/>

                        {showMenu && 
                            <div className="submenu">
                                <div className="userInfo">
                                    <h3>MD Any Name</h3>
                                    <p>Senior Sales Executive</p>
                                </div>

                                {subMenu.map((title, index) => {
                                    return(
                                        <ul key={index}>{title.menuItem}</ul>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar