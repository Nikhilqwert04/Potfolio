import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (detail) => {
            if (cursorRef.current) {
                cursorRef.current.style.top = detail.clientY - 23 + "px";
                cursorRef.current.style.left = detail.clientX - 23 + "px";
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="xl:block hidden cursordelay bg-[#cfff45] h-15 w-15 rounded-full fixed transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-300 z-20 blur-xl opacity-60 pointer-events-none"
        ></div>
    );
};

export default CustomCursor;
