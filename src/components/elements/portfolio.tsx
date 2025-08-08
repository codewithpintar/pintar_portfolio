import React, { Fragment } from 'react'
import styles from '../../styles/components/portfolio.module.css'
import { portfolio } from '@/utils/data/portfolio'
import Link from 'next/link'

const Portfolio = () => {
    return (
        <Fragment>
            <section className={styles.portfolioSection}>
                <div className="container">
                    <h4 className='topHeading'>PORTFOLIO</h4>
                    <h4 className='heading'>Our Projects </h4>

                    <div className={styles.portfolioMain}>
                        {
                            portfolio?.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={styles.portfolioCard}
                                        style={{ backgroundImage: `url(${item.imgUrl})` }}
                                    >
                                        <div className={styles.content}>
                                            <h2>{item.projectName}</h2>
                                            <h3>{item.buildTech}</h3>
                                            <Link href={item.url} target="_blank">
                                                <button className={styles.viewBtn}>View Project</button>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Portfolio
