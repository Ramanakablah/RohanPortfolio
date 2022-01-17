import React from 'react'
import "../CSS/Body.css"
import Rohanimage from "../Images/Rohan.jpg"
import { Parallax } from 'react-scroll-parallax';

const body = () => {
    return (
        <>
            <div className="Body-Box">
                <div className="b-left">
                    <div className="showcase">
                        <div className="b-image">
                            <img src={Rohanimage} alt="" />
                        </div>
                        <div className="imageshadow"></div>
                    </div>
                </div>
                <div className="b-right">
                    <div className="b-right-about">
                        <div className="parallax d-flex">

                        <Parallax x={[-300,10]}>
                        A
                        </Parallax>
                        <Parallax x={[-200,10]}>
                        b
                        </Parallax>
                        <Parallax x={[-100,10]}>
                        o
                        </Parallax>
                        <Parallax x={[0,10]}>
                        u
                        </Parallax>
                        <Parallax x={[200,10]}>
                        t
                        </Parallax>
                        <Parallax x={[200,10]}>
                        M
                        </Parallax>
                        <Parallax x={[400,10]}>
                        e
                        </Parallax>
                        </div>
                       {/* <Parallax x={[0,20]}> */}
                        <div className="parallelogram"></div>
                       {/* </Parallax> */}
                    </div>
                    <p>
                        I'm a Tech Geek with a constant aim of learning
                        new stuff and master new technologies that market provide.
                        Delivering Perfect result is my moto.
                    </p>
                    <p>
                        With lots of passsion and motivation I also enjoy Music and Movies are always welcomed.
                        During my journey of learning web development I learned the management of time and establish balance between stuff.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A earum reiciendis consequatur corrupti molestiae porro voluptatum! Laborum id a impedit.
                    </p>
                </div>
            </div>
        </>
    )
}

export default body
