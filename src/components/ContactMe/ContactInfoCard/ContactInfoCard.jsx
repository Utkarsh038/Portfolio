import React from 'react'
import "./ContactInfoCard.css"
import { NavLink } from 'react-router'

function ContactInfoCard({iconUrl , text , link, onClick }) {
  return (
    <div>
      <div className="contact-details-card" onClick={()=>{}}>
      
        <div className="icon">
          <NavLink style={{alignItems:"center",justifyContent:"center",display:"flex"}} to={link} >
            <img src={iconUrl}  alt={text} />

          </NavLink>
        </div>

        <p>{text}</p>
      </div>
    </div>
  )
}

export default ContactInfoCard
