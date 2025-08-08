import React, { Fragment, useEffect, useState } from 'react'
import styles from '../../styles/components/homebanner.module.css'


const HomeBanner = () => {

    const fullText = 'Web Developer';
    const [text, setText] = useState('');
    const [i, setI] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!deleting && i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                setI(i + 1);
            } else if (deleting && i > 0) {
                setText(fullText.slice(0, i - 1));
                setI(i - 1);
            } else if (i === fullText.length) {
                setDeleting(true);
            } else if (i === 0 && deleting) {
                setDeleting(false);
            }
        }, deleting ? 100 : 100);
        return () => clearInterval(interval);
    }, [i, deleting, fullText]);

    return (
        <Fragment>
            <section className={styles.sectionMain}>
                <div className="container">
                    <div className={styles.banner}>
                        <div className={styles.content}>
                            <h2>Hello There !</h2>
                            <h1>I'm Pintar Sharma</h1>
                            <h1>a <span style={{ color: ' #0189ff' }}>{text}</span></h1>
                            <p>
                                Hello there! I'm Pintar Sharma, a passionate Web Developer who loves crafting clean, responsive,
                                and user-friendly websites. I enjoy turning ideas into reality through code and constantly strive
                                to learn and improve.
                            </p>
                            <div className={styles.buttonMain}>
                                <button className={styles.contactBtn}>Contact Us</button>
                                <button className={styles.dowloadBtn}>Download CV</button>
                            </div>
                        </div>
                        <div className={styles.imgContent}>
                            <img src="/images/me2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default HomeBanner
