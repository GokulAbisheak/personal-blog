import React from "react";
import profile from "../assets/images/profile.jpg";
import SLIIT from "../assets/images/SLIIT.png";
import TCK from "../assets/images/TCK.png";
import JSLogo from "../assets/images/JavaScript.png";
import MongoDBLogo from "../assets/images/MongoDB.png";
import ExpressLogo from "../assets/images/Express.png";
import ReactLogo from "../assets/images/React.png";
import NodeLogo from "../assets/images/Node.png";
import JavaLogo from "../assets/images/Java.png";
import PHPLogo from "../assets/images/PHP.png";
import MySQLLogo from "../assets/images/MySQL.png";
import ProblemSolving from "../assets/images/ProblemSolving.png";
import HTMLLogo from "../assets/images/HTML.png";
import CSSLogo from "../assets/images/CSS.png";
import MSClubLogo from "../assets/images/MSClub.png";
import LEOClubLogo from "../assets/images/LEOClub.jpg";

function About() {
    return (
        <div id="about">
            <div style={{zIndex: "100"}} id="about-nav" class="about-nav">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#about">Introduction</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#education">Education</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#volunteering">Volunteering</a>
                    </li>
                </ul>
            </div>
            <div id="intro">
                <div class="circle-profile">
                    <img id="profile" src={profile} alt="Photo Captured at the Installation Event of LEO Club of SLIIT"/>
                </div>
                <div class="intro-context">
                    <p>Hey! My name is Gokul Abisheak. I'm a sofware engineering undergraduate at Sri Lankan Institute of Information Technology (SLIIT).
                        My passion towards software development started at a very young age, I'd love to be a full-stack developer.
                        I love to learn about new technologies, Currently I'm learning about Cloud Computing.
                    </p>
                </div>
            </div>
                <div id="education" class="education">
                    <h2>Education</h2>
                    <div id="education-grid">
                        <div style={{zIndex: "10"}} class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div style={{height: "550px", marginTop: "20px", boxShadow: "0px 0px 10px #808080"}} class="card">
                                    <img id="crest" src={SLIIT} class="card-img-top" alt="SLIIT Crest"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Sri Lankan Institute of Information Technology</h5>
                                    </div>
                                    <div class="card-footer bg-transparent">
                                        2021 - Present
                                    </div>
                                    <div class="card-footer bg-transparent">
                                        BSc (Hons) in Information Technology Specialising in Software Engineering
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div style={{height: "550px", marginTop: "20px" , boxShadow: "0px 0px 10px #808080"}} class="card">
                                    <img id="crest" src={TCK} class="card-img-top" alt="Trinity College Kandy Crest"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Trinity College Kandy</h5>
                                    </div>
                                    <div class="card-footer bg-transparent">
                                        2007 - 2022
                                    </div>
                                    <div class="card-footer bg-transparent">
                                        General Certificate of Education (Advanced Level) - Physical Science
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="skills">
                    <h2>Skills</h2>
                    <div class="skills-grid">
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                            <div class="col">
                                <div class="card h-100">
                                    <img src={JSLogo} class="card-img-top" alt="JavaScript"/>
                                    <div class="card-body">
                                        <h5 style={{fontSize: "18px"}} class="card-title">JavaScript</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={MongoDBLogo} class="card-img-top" alt="MongoDB"/>
                                    <div class="card-body">
                                        <h5 style={{fontSize: "18px"}} class="card-title">MongoDB</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={ExpressLogo} class="card-img-top" alt="Express.js"/>
                                    <div class="card-body">
                                        <h5 style={{fontSize: "18px"}} class="card-title">Express.js</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={ReactLogo} class="card-img-top" alt="React"/>
                                    <div class="card-body">
                                        <h5 style={{fontSize: "18px"}} class="card-title">React</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={NodeLogo} class="card-img-top" alt="Node.js"/>
                                    <div class="card-body">
                                        <h5 style={{fontSize: "18px"}} class="card-title">Node.js</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={JavaLogo} class="card-img-top" alt="Java"/>
                                    <div class="card-body">
                                        <h5 style={{fontSize: "18px"}} class="card-title">Java</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={MySQLLogo} class="card-img-top" alt="MySQL"/>
                                    <div class="card-body">
                                        <h5 style={{fontSize: "18px"}} class="card-title">MySQL</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={PHPLogo} class="card-img-top" alt="PHP"/>
                                    <div class="card-body">
                                        <h5 style={{fontSize: "18px"}} class="card-title">PHP</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={ProblemSolving} class="card-img-top" alt="ProblemSolving"/>
                                    <div class="card-body">
                                        <h5 style={{fontSize: "18px"}} class="card-title">ProblemSolving</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={HTMLLogo} class="card-img-top" alt="HTML"/>
                                    <div class="card-body">
                                        <h5 style={{fontSize: "18px"}} class="card-title">HTML</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={CSSLogo} class="card-img-top" alt="CSS"/>
                                    <div class="card-body">
                                        <h5 style={{fontSize: "18px"}} class="card-title">CSS</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="volunteering">
                    <h2>Volunteering</h2>
                    <div class="volunteering-grid">
                        <div class="card" style={{width: "100%"}}>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <table>
                                        <tr>
                                            <td>
                                                <img src={SLIIT} class="img-thumbnail" alt="SLIIT Crest"/>
                                            </td>
                                            <td>
                                                <h6>Batch Representative</h6>
                                                <p>SLIIT</p>
                                                <p class="text-secondary">June 2021 - Present</p>
                                            </td>
                                        </tr>
                                    </table>
                                </li>
                                <li class="list-group-item">
                                    <table>
                                        <tr>
                                            <td>
                                                <img src={SLIIT} class="img-thumbnail" alt="SLIIT Crest"/>
                                            </td>
                                            <td>
                                                <h6>Editor</h6>
                                                <p>SLIIT Athletic Committee</p>
                                                <p class="text-secondary">June 2022 - Present</p>
                                            </td>
                                        </tr>
                                    </table>
                                </li>
                                <li class="list-group-item">
                                    <table>
                                        <tr>
                                            <td>
                                                <img src={MSClubLogo} class="img-thumbnail" alt="MS Club SLIIT Logo"/>
                                            </td>
                                            <td>
                                                <h6>Member</h6>
                                                <p>MS Club of SLIIT</p>
                                                <p class="text-secondary">October 2022 - Present</p>
                                            </td>
                                        </tr>
                                    </table>
                                </li>
                                <li class="list-group-item">
                                    <table>
                                        <tr>
                                            <td>
                                                <img src={LEOClubLogo} class="img-thumbnail" alt="LEO Club SLIIT Logo"/>
                                            </td>
                                            <td>
                                                <h6>Member</h6>
                                                <p>LEO Club of SLIIT</p>
                                                <p class="text-secondary">October 2022 - Present</p>
                                            </td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About;