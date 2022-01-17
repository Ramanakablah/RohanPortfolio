import React from 'react'
import "../CSS/Project.css"

const Project = () => {
    return (
        <>
            <div className="Projects">
                <div className="p-projects">
                    <div className="p-card">
                        <div className="p-image">
                            <img src="https://webtechbs.com/wp-content/uploads/2019/03/Feature-image-12.jpg" alt="Web" />
                        </div>
                        <div className="accordion accordion-flush " id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>Web Projects </h2>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> <a href="https://yourtourdiary.herokuapp.com" target="_blank" rel="noreferrer"> https://yourtourdiary.herokuapp.com </a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-projects">
                    <div className="p-card">
                        <div className="p-image">
                            <img src="https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Android-app-development-cost-1.png" alt="Web" />
                        </div>
                        <div className="accordion accordion-flush " id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h2>Mobile Projects </h2>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> <a href="https://yourtourdiary.herokuapp.com" target="_blank" rel="noreferrer"> https://yourtourdiary.herokuapp.com </a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-projects">
                    <div className="p-card">
                        <div className="p-image">
                            <img src="https://engagecontent.com.au/wp-content/uploads/2017/03/content-writer-production-line.jpg" alt="Web" />
                        </div>
                        <div className="accordion accordion-flush " id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h2>Content Projects </h2>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> <a href="https://yourtourdiary.herokuapp.com" target="_blank" rel="noreferrer"> https://yourtourdiary.herokuapp.com </a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-projects">
                    <div className="p-card">
                        <div className="p-image">
                            <img src="https://cdnblog.etmoney.com/wp-content/uploads/2020/07/Complete-Financial-Picture.png" alt="Web" />
                        </div>
                        <div className="accordion accordion-flush " id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <h2>Finance Experties </h2>
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> <a href="https://yourtourdiary.herokuapp.com" target="_blank" rel="noreferrer"> https://yourtourdiary.herokuapp.com </a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
