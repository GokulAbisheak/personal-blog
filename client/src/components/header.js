import React from "react";

function Header() {
    return (
        <nav id="navbar" class="navbar fixed-top navbar-expand-sm">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div id="navbar-tab-div" class="navbar-nav">
                    <a id="navbar-tab" class="nav-link active" aria-current="page" href="#">Home</a>
                    {/*<a id="navbar-tab" class="nav-link" href="#about">About</a>*/}
                    <li class="nav-item dropdown">
                        <a id="navbar-tab" class="nav-link dropdown-toggle" href="#about" role="button" data-bs-toggle="dropdown" aria-expanded="false">About </a>
                        <ul id="dropdown-menu" class="dropdown-menu">
                            <li><a class="dropdown-item" href="#about">Introduction</a></li>
                            <li><a class="dropdown-item" href="#education">Education</a></li>
                            <li><a class="dropdown-item" href="#skills">Skills</a></li>
                            <li><a class="dropdown-item" href="#volunteering">Volunteering</a></li>
                        </ul>
                    </li>
                    <a id="navbar-tab" class="nav-link" href="#contact">Contact</a>
                    <a id="navbar-tab" class="nav-link" href="#projects">Projects</a>
                </div>
            </div>
        </nav>
    )
}

export default Header;