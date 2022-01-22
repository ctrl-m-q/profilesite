import React from "react";
import Typical from 'react-typical';
import styled,{keyframes} from 'styled-components';
import {pulse} from 'react-animations';
import './Profile.css';

const Pulse = styled.div`animation: 2s ${keyframes `${pulse}`} infinite`;

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi there, I'm <Pulse> <span className="highlighted-text"> Ruth Ife Bolaji </span> </Pulse>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Poet",
                    1000,
                    "Lawyer",
                    1000,
                    "Story teller",
                    1200,
                    "Mental health Activist",
                    1200,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>Joyfully sharing life and God's gift to all</span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>
              Enlist services{" "}
            </button>
            <a href='RIfe.pdf' download='Ife RIfe.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
          <div className="sm-column">
            <div className='column-icons'>
              <a
                href="https://www.linkedin.com/in/Ruth%20Ifeoluwa%20Bolaji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                href="https://www.instagram.com/ifebolaji/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/butterflyife"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-youtube"></i>
              </a>
              <a
                href="https://ifebolaji.wordpress.com/author/ruthbolaji/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-wordpress"></i>
              </a>
              </div>
        </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}
