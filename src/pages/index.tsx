import HomeBanner from '@/components/elements/homeBanner'
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import SkillBar from '@/components/elements/skillbar'
import MySkills from '@/components/elements/myskills'
import Portfolio from '@/components/elements/portfolio'
import styles from '../styles/home.module.css';

const Home = () => {  

  return (
    <div>
      <Header />
      <HomeBanner />
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.mainAbout}>
            <div className={styles.left}>
              <h4>About Us</h4>
              <h1>
                Experienced Frontend Developer <br />
                Delivering <span style={{ color: '#0189ff' }}>Digital Solutions</span>
              </h1>
              <p>
                As a Frontend Developer, I focus on delivering clean, efficient, and scalable solutions that bring digital
                products to life. My work goes beyond just building interfaces—I solve real user and business problems
                through thoughtful design implementation, performance optimization, and responsive development.
              </p>
              <p>
                By combining a deep understanding of modern frameworks like ReactJS and NextJS with strong UI/UX sensibilities,
                I help turn ideas into interactive, accessible, and high-performing web experiences that users love and businesses rely on.
              </p>

              <ul className={styles.keyPointMain}>
                <li><FaCheck fontSize={18} color='#0189ff' /> &nbsp;&nbsp;Branding & Design</li>
                <li><FaCheck fontSize={18} color='#0189ff' /> &nbsp;&nbsp;Web Development</li>
                <li><FaCheck fontSize={18} color='#0189ff' /> &nbsp;&nbsp;Product Design</li>
                <li><FaCheck fontSize={18} color='#0189ff' /> &nbsp;&nbsp;Digital Marketing</li>
              </ul>

              <div className={styles.contactDetails}>
                <div className={styles.email}>
                  <div className={styles.icon}>
                    <span><MdOutlineEmail /></span>
                  </div>
                  <div className={styles.dtl}>
                    <span>Email Us</span>
                    <h6>devpintar22@gmail.com</h6>
                  </div>
                </div>
                <div className={styles.phone}>
                  <div className={styles.icon}>
                    <span><FiPhoneCall /></span>
                  </div>
                  <div className={styles.dtl}>
                    <span>Make A Call</span>
                    <h6>+91 8920297423</h6>
                  </div>
                </div>
              </div>


            </div>
            <div className={styles.right}>
              <img src="./images/about-3.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.skillsetSection}>
        <div className="container">
          <div className={styles.skillMain}>
            <div className={styles.leftSkill}>
              <h4>SKILLSET</h4>
              <h1>
                Creative and<span style={{ color: '#0189ff' }}>  Professional Skills</span> <br />
                Experience in Key Areas
              </h1>
              <p>
                I bring a strong blend of creativity and technical expertise, with hands-on experience across multiple facets of
                digital product creation. From product design and frontend development to UI/UX design and full web development,
                I focus on delivering user-centered, scalable, and visually compelling solutions that meet both business and user
                needs.
              </p>

              <button className={styles.dowloadBtn}>Download CV</button>

            </div>
            <div className={styles.rightSkill}>
              <SkillBar label="UI Design & UX Development" percentage={89} />
              <SkillBar label="Web Development" percentage={70} />
              <SkillBar label="Product Design & Development" percentage={80} />
              <SkillBar label="Frontend Development" percentage={90} />
              <SkillBar label="Branding & Visual Design" percentage={70} />
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.experienceSection}>
        <div className="container">
          <h4 className='heading'>Professional Experience</h4>
          <div className={styles.experienceMain}>
            <div className={styles.educationRight}>
              <img src="/images/experience.png" alt="" />
            </div>
            <ul className={styles.educationLeft}>
              {experience?.map((item, index) => {
                return (
                  <li key={index}>
                    <h4>{item.companyName}</h4>
                    <div className={styles.listDetls}>
                      <span>{item.jobProfile}</span>
                      <span >({item.startYear}) </span>
                    </div>
                  </li>
                )
              })}

            </ul>
          </div>
        </div>
      </section>

      <section className={styles.educationSection}>
        <div className="container">
          <h4 className='heading'>Academic Qualifications </h4>
          <div className={styles.educationMain}>
            <ul className={styles.educationLeft}>
              {eduData?.map((item, index) => {
                return (
                  <li key={index}>
                    <h4>{item.educationSubject} ({item.passingYear})</h4>
                    <h6>{item.university}</h6>
                  </li>
                )
              })}

            </ul>
            <div className={styles.educationRight}>
              <img src="/images/education-image.png" alt="" />
            </div>
          </div>
        </div>
      </section> */}

      <MySkills />

      <Portfolio />


      <Footer />
    </div>
  )
}

export default Home
