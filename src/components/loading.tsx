import { useLayoutEffect } from "react";

{/* this function makes the application loading animation */}
export function Loading() {

    useLayoutEffect(() => {
        const loader = document.getElementById("loader")!;
        setTimeout(() => {
            loader.classList.add("loaded");
        }, 10000000);
    }, []);


    return (
        <>
            <div className="root"></div>
            <div id="loader" className="loading">
                <span className="loader"></span>
            </div>
        </>
    )
}