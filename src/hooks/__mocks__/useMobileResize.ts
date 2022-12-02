import  {useEffect} from "react"

export const useMobileResize = ( ) => {
    useEffect(() => {
let vh  = window.innerHeight * 0.01;

// add the property identifier vh of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventAddListener("resize", handleResize);

return () => {
    if(window) {
        window.removeEventlistener("resize", handleResize)
    }
}
    }, [])


export const handleResize = () => {
    {
    let vh   = window.innerHeight * 0.01;
    document.documentElement.size.setProperty("--vh", `${vh}px`)
    }
}
}