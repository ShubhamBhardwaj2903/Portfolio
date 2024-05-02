import React, { useEffect } from 'react';
import './textMask.css';

function TextMask(props) {
    const {} = props;

    useEffect(() => {
        function onMouseMove(e) {
            document.documentElement.style.setProperty("--cursor-x", e.clientX + 'px');
            document.documentElement.style.setProperty("--cursor-y", e.clientX + 'px');
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <div className="main_page">
                <div className="layer dark-layer">
                    <div className="text-container">
                        <div>Hello</div>
                        <div>Hello</div>
                        <div>Hello</div>
                        <div>Hello</div>
                        <div>Hello</div>
                    </div>
                </div>
                <div className="layer layer_red">
                    <div className="text-container text-black">
                        <div>qwertyuio</div>
                        <div>qwertyuio</div>
                        <div>qwertyuio</div>
                        <div>qwertyuio</div>
                        <div>qwertyuio</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TextMask;
