import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollManager () {
    const location = useLocation()

    useEffect(() => {
        if(!location.hash) {
            window.scrollTo({
                top: 0,
                behavior: "smooth" 
            })
            return
        }

        const id = location.hash.substring(1)

        requestAnimationFrame(() => {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })

    }, [location.pathname, location.hash])

    return null
}
