import React from 'react'
import "./notificard.scss";

const Notificard = ({data}) => {
  return (
    <div className="notificard">
        <div className="img">
            <img src={data.img} alt="" />
        </div>
        <div className="notificData">
            <li>{data.name}</li>
            <li>{data.notification}</li>
            <li>{data.time}</li>
        </div>
    </div>
  )
}

export default Notificard