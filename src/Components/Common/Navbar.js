import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="nev">
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <div className="container">
            {/* <a class="navbar-brand" href="#"><img src="img/logo2.png" class="" alt=""></a> */}
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-start">
                <li className="nav-item dropdown px-3 ">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/vision">
                        Vision and Mission
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/syllabus">
                        Syllabus
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="/faculty">
                    Faculty
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="/resources">
                    Resources
                  </a>
                </li>
                
                <li className="nav-item dropdown px-3">
                  <a className="nav-link" href="#">
                    Activity
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/activity">
                      Activities
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/practices">
                        Practices
                      </a>
                    </li>
                    
                    <li>
                      <a className="dropdown-item" href="/others">
                        Others
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
