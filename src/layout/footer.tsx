import React, { Fragment } from 'react'
import styles from '../styles/components/footer.module.css'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <footer >
        <div className="container">
          <div className={styles.footerMain}>
            <h2> Let's Begin the Conversation!</h2>
            <ul className={styles.contact}>
              <li>
                <button>Download CV</button>
              </li>
              <li>
                <button>Contact Us</button>
              </li>
            </ul>
            <ul className={styles.socialMedia}>
              <li><FaGithub /></li>
              <li><FaLinkedinIn /></li>
              <li><FaFacebookF /></li>
              <li><FaInstagram /></li>
              <li><FaPinterestP /></li>
            </ul>
          </div>
          <div className={styles.footerBottom}>
            <p>All rights reserved © 2025 DEVPINTAR</p>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
