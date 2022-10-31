import React from "react";

import { NavLink, Outlet } from "react-router-dom";
import "./NavLinks.css";


const NavLinks = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#A">
            <NavLink className="NavLink" to="/" href="#1">
              TrioMio
            </NavLink>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#1">
                  <NavLink className="NavLink" to="/">
                    Home
                  </NavLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#2">
                  <NavLink className="NavLink" to="gallery">
                    Gallery
                  </NavLink>
                </a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link" href="#3" data-bs-toggle="dropdown">
                  <NavLink className="NavLink" to="shows">
                    Shows
                  </NavLink>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#ladida">
                      <NavLink className="NavLink-show" to="shows/ladida">
                        Ladida
                      </NavLink>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#dings">
                      <NavLink className="NavLink-show" to="shows/dings">
                        Dings
                      </NavLink>
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#triomio">
                      <NavLink className="NavLink-show" to="shows/triomio">
                        TrioMio
                      </NavLink>
                    </a>
                  </li>
                </ul>
              </li>
              {/* <a href="#contact-id">[testing. Jump to contact-id]</a> */}
              <li class="nav-item active">
                <a class="nav-link" href="/#anchor-name">
                  <NavLink
                    className="NavLink"
                    to="/#anchor-name" // Gives the name to url
                    href="/#anchor-name"
                  >
                    Contact
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
          {/* <a href="/#anchor-name"> */}
          <a href={"document.getElementById('anchor-name').scrollIntoView(true)"}>
            Jump
          </a>
          
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default NavLinks;
