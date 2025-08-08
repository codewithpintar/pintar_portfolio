import React, { Fragment, useEffect, useState } from 'react'

const Cursore = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <Fragment>
            <div
                style={{
                    position: "fixed",
                    top: position.y,
                    left: position.x,
                    width: 40,
                    height: 40,
                    opacity: 0.6,
                    backgroundColor: "pink",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    zIndex: 9999,
                }} />
        </Fragment>
    )
}

export default Cursore
