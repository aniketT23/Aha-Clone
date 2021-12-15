import { useLocation } from "react-router-dom/cjs/react-router-dom.min"


export const Dummy =()=>{
    const location = useLocation();
    const url = location.state.url
    return (
       
        <iframe title="checking" src={url} allow="fullscreen" width="100%"
    height="1000" />
        
    )
}