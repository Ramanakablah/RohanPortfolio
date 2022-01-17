import React, { useState } from 'react'
import "../CSS/Contact.css"
import emailjs from 'emailjs-com';


const Contact = () => {

    const [mailcred, setmailcred] = useState({ name: "", email: "", query: "" })

    const onchange = (e) => {
        setmailcred({ ...mailcred, [e.target.name]: e.target.value })
    }

    const sendit = (e) => {
        e.preventDefault()
        if(mailcred.query===""){
            setmailcred({
                name: mailcred.name,
                email: mailcred.email,
                query: "Hey how are you"
            })
        }
        if(mailcred.email){
            emailjs.send("service_mdu8z4l", "template_ajb7goh", mailcred, "user_AOLeNmrFyKSLf0lOilzWc")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert("Your queries and mail-ID is passed to Rohan Plz wait for reply patiently.")
        }
        else{
            alert("Please enter valid email-Id")
        }
    }
    return (
        <>
            <div className="c-contact">
                <div className="c-contact-Medias">
                    <div className="c-left-Letstalk">
                        Let's Talk
                    </div>
                    <div className="c-socialhandles">
                        <div className="facebook rb">
                            <a href=" https://www.instagram.com/rohan._bhardwaj/" target="_blank" ><i className="fab fa-facebook"></i> </a>
                        </div>
                        <div className="Linkedin rb">
                            <a href=" https://www.linkedin.com/in/rohan-bhardwaj-129984211/" target="_blank">  <i className="fab fa-linkedin"></i></a>
                        </div>
                        <div className="Instagram rb">
                            <a href=" https://www.instagram.com/rohan._bhardwaj/" target="_blank"> <i className="fab fa-instagram-square"></i></a>
                        </div>
                    </div>
                    <div className="styledtriangle"></div>
                </div>
                <div className="c-message">
                    <div className="head">
                        <div className="head1">Lets Discus</div>
                        <div className="head11">The Project</div>
                    </div>
                    <form className="c-form container">
                        <label htmlFor="Name">Name</label>
                        <input type="text" id='Name' className='Input-c-form' name='name' onChange={onchange} />
                        <label htmlFor="EMail">E-mail</label>
                        <input type="email" id='EMail' className='Input-c-form' name='email' onChange={onchange} />
                        <label htmlFor="Question"> If there's any query let me know </label>
                        <textarea name="query" id="Question" className='Question-c-form' cols="30" rows="10" onChange={onchange}></textarea>
                    </form>
                    <button className='btn btn-warning' onClick={sendit}> Send </button>
                    <div className="c-foot">
                        <span className="c-socialmedia Instagram">
                            <a href=" https://www.instagram.com/rohan._bhardwaj/" target="_blank" > <i className="fab fa-instagram-square"></i> </a>
                        </span>
                        <span className="c-socialmedia facebook">
                            <a href=" https://www.instagram.com/rohan._bhardwaj/" target="_blank"> <i className="fab fa-facebook"></i> </a>
                        </span>
                        <span className="c-socialmedia">
                            <a href=" https://www.linkedin.com/in/rohan-bhardwaj-129984211/" target="_blank"> <i className="fab fa-linkedin"></i> </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
