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

    // Create template parameters to match your EmailJS template
    const templateParams = {
      name: `${name} ${lname}`.trim(),
      message: msg,
      email: email,
      time: new Date().toLocaleString()
    };

    emailjs.send('service_lx7k9qb', 'template_2ftpukd', templateParams, 'lMpZU1HRUnumN1wOZ') 
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
                <input type="text" name="from_name" value={name} placeholder="First Name" onChange={(e)=>setname(e.target.value)} required/>
                <input type="text" name="from_lastname" value={lname} placeholder="Last Name" onChange={(e)=>setlname(e.target.value)} />
            </div>

            <input type="email" name="from_email"  value={email} placeholder="Email" onChange={(e)=>setemail(e.target.value)} required />
            <textarea type="text" name="message" value={msg} placeholder="Message" rows={3} onChange={(e)=>setmsg(e.target.value)} required />
             <input type="submit" className="button" value="Send"  /> 
           

        </form>
      </div>
    </div>
  )
}

export default ContactForm
