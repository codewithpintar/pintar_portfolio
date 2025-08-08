import React, { Fragment } from 'react'
import styles from '../styles/components/header.module.css'
import { HiOutlineMail } from "react-icons/hi";

const Header = () => {
    return (
        <Fragment>
            <header>
                <div className="container">
                    <div className={styles.navbar}>
                        <div className={styles.logo}>
                            <h2><span style={{color:'#000'}}>DEV</span>PINTAR</h2>
                        </div>
                        <ul className={styles.menu}>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Sservices</li>
                            <li>Projects</li>
                            <li>Blog</li>
                        </ul>
                        <div className={styles.contact}>
                            <span> <HiOutlineMail fontSize={25} color='#0189FF' /></span>
                            <span>devpintar22@gmail.com</span>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header
