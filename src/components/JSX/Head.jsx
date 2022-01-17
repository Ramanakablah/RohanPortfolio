import React,{useEffect} from 'react'
import "../CSS/Head.css"
import Rohan from "../Images/RohanB2.png"

const Head = () => {

    useEffect(() => {
        let observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                const imag1 = entry.target.querySelector(".h-person-image")
                const imag2 = entry.target.querySelector(".styleBackground")
                if(entry.isIntersecting)
                {
                    imag1.classList.add("slide")
                    imag2.classList.add("slidel")
                    return;
                }
            })
        })
         observer.observe(document.querySelector(".Person-Image"))
    }, [])

    return (
        <>
            <div className="Me-Intro">
                <div className="Person-Intro">
                    <div className="Name-of-Person">
                        <h1> Hey my name is  </h1>
                        Rohan Bhardwaj
                    </div>
                    <div className="i-quality">
                        I am a :
                    </div>
                    <div className="qualifications">
                        <div className="quality-wrapper">
                            <div className="qualities">Web Developer</div>
                            <div className="qualities">Content creator</div>
                            <div className="qualities">UI/UX Designer</div>
                            <div className="qualities">Financer</div>
                            <div className="qualities">Photographer</div>
                        </div>
                    </div>
                    <p className='intro'>
                        Hey, I'm Rohan a second year student in BPIT.
                        I provide my services in Development and Design of Modern Web Apps, Online Stores, Content Creating and also as a finace expert.
                        I'm a part-time podcaster.
                    </p>
                </div>
                <div className="Person-Image">
                    <img src={Rohan} alt="Rohan" className='h-person-image' />
                    <div className="styleBackground"></div>
                </div>

            </div>
        </>
    )
}

export default Head
