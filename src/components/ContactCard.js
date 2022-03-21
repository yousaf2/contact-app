import React from 'react'
import user_image from '../images/user.png'
const ContactCard = (props) => {
    return (
        <div className='item'>
            <img className='ui avatar image' src={user_image} alt="user"></img>
            <div className='content'>
                <div className='header'>{props.contact.name}</div>
                <div>{props.contact.email}</div>
            </div>
            <i onClick={()=>props.clickHandler(props.contact.id)} className='trash alternate outline icon' style={{color:"red",marginTop:"7px"}}></i>
        </div>
    )
}

export default ContactCard
