import PropTypes from 'prop-types'
import React from 'react'

import devPhoto from '../images/Dany_Lasso.jpeg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* <span className="icon fa-diamond"></span> */}
      <img src={devPhoto} alt="Dany Lasso" className="photo" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>DANY LASSO</h1>
        <p>
          <b> Software Engineer with experience in high availability systems development, following agile methodologies and applying a DevOps culture.</b>
        </p>
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/dany_f_lasso" target="_blank"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dany-lasso-10683b124/" target="_blank" className="icon fa-linkedin">
              <span className="label">Linkedin</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/dflasso/" target="_blank" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dflasso" target="_blank"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
