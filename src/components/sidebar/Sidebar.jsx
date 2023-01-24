import React, {useState} from 'react'
import { CgMenuGridR } from 'react-icons/cg';
import { RxDotFilled } from 'react-icons/rx';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import "./sidebar.scss";

function Sidebar() {
    const [subMenuOpen, setSubMenuOpen] = useState(false)

  return (
    <div className="sidebar">

      <div className="single-menu">
        <div className="menu-title">
          <CgMenuGridR className="icon"/> Dashboard
        </div>
      </div>

      <div className="multi-menu">
        <div onClick={() => setSubMenuOpen(!subMenuOpen)} className="sub-menu">
          <div className="menu-title">
            <CgMenuGridR className="icon"/> Forms
          </div> 

          {subMenuOpen ? (<MdKeyboardArrowUp className="icon"/>) : (<MdKeyboardArrowDown className="icon"/>)}
        </div>

        {subMenuOpen && (
          <ul className="dropdown-menu">
            <li><RxDotFilled/> Layout 1</li>
            <li><RxDotFilled/> Layout 1</li>
          </ul>
        )}
      </div>

      <div className="single-menu">
        <div className="menu-title">
          <CgMenuGridR className="icon"/> Components
        </div>

        <MdKeyboardArrowDown className="icon"/>
      </div>

      <div className="single-menu">
        <div className="menu-title">
          <CgMenuGridR className="icon"/> Tables
        </div>

        <MdKeyboardArrowDown className="icon"/>
      </div>

      <div className="single-menu">
        <div className="menu-title">
          <CgMenuGridR className="icon"/> Profile
        </div>

        <MdKeyboardArrowDown className="icon"/>
      </div>
    </div>
  )
}

export default Sidebar