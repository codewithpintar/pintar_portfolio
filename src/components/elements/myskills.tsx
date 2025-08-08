import React, { Fragment } from 'react'
import styles from '../../styles/components/myskills.module.css'
import { myskills } from '@/utils/data/myskills'
import { FaRegCheckCircle } from 'react-icons/fa'

const MySkills = () => {
    return (
        <Fragment>
            <section className={styles.myskillsSection}>
                <div className="container">
                    <h4 className='heading'>Technical Skills</h4>
                    <div className={styles.myskillsMain}>
                        <ul className={styles.skill}>
                            {
                                myskills?.map((item, index) => {
                                    return (
                                        <li>
                                            {/* <FaRegCheckCircle fontSize={20} /> &nbsp;&nbsp; */}
                                            {item.skillName}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default MySkills
