import React, { useState } from 'react'
import "./ContactForm.css"
import emailjs from "@emailjs/browser"
import { useRef } from 'react'
import toast from 'react-hot-toast'

function ContactForm() {

  const [name , setname] = useState("");
  const [lname , setlname] = useState("");
  const [email , setemail] = useState("");
  const [msg , setmsg] = useState("");
  const form = useRef(); 

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_lx7k9qb', 'template_2ftpukd', form.current , 'lMpZU1HRUnumN1wOZ') 
      .then((result)=>{
        console.log("Email sent successfully!");
        toast.success("Message sent successfully!")
        setname("");
        setlname("");
        setemail("");
        setmsg("");
      }).catch((error) =>{
        console.log("Error sending email:", error);
        toast.error("Failed to send message. Please try again.");
      })
    }

  
  
  return (
    <div>
      <div className="contact-form-content">
        <form ref={form} onSubmit={sendEmail}>
            <div className="name-container">
                <input type="text" name="from_name" value={name} placeholder="First Name" onChange={(e)=>setname(e.target.value)}/>
                <input type="text" name="lastname" value={lname} placeholder="Last Name" onChange={(e)=>setlname(e.target.value)} />
            </div>

            <input type="text" name="email_name"  value={email} placeholder="Email" onChange={(e)=>setemail(e.target.value)} />
            <textarea type="text" name="message" value={msg} placeholder="Message" rows={3} onChange={(e)=>setmsg(e.target.value)} />
             <input type="submit" className="button" value="Send"  /> 
           

        </form>
      </div>
    </div>
  )
}

export default ContactForm
