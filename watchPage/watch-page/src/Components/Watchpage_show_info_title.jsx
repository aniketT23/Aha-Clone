
import "./MainCont.css";
import {useState,useEffect} from "react"

import axios from "axios"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const MainCont =()=>{
     const history  = useHistory()
    const [data,setdata] = useState([]);
    const data_getting =async ()=>{
        const {data} = await axios.get("http://localhost:3001/data/1");
       
        setdata(data)
    }
    const watchListing  =async ()=>{
            await axios.post("http://localhost:3001/watchList",data);
            alert(`You can watch this show any time now from your watchlist`)
    }
    useEffect(()=>{
       data_getting()
        
     },[])
     const main_bg = data.main_bg;
    return (
        <>
        <div className="main_div_p" style={{ backgroundImage: `url(${main_bg})` }}>
    <div className="info_cont_p">
    <div>
        {data.premium&&   <div className="tag_div_p">
            <img  src={data.tags} alt="tags" /></div>}
 
    <div className="title_p"  >
    <img src={data.title} alt="metaData"/>
    </div>
    <div className="metaData_p">
        <img src={data.metaData} alt="metaData"/>
    </div>
    <div className="description_title_p">
   {data.description}
    </div>
    <div className="button_box_1P">
        <button className="triler_button_p" onClick={()=>{history.push({
            pathname:"/check",
            state:{
                url:"https://youtu.be/Luq2aEeRoKQ"
            }
        })}}>
            Play Trailer
        </button>
        <button className="strt_p"  onClick={()=>{history.push({
            pathname:"/check",
            state:{
                url:"https://youtu.be/p5ZvZ9wlc8Q"
            }
        })}}  >
        
        </button>
    </div>
    <div className="action_p">
            <button className="watchlist_p" onClick={watchListing} />
            <button className="share_p" />
    </div>
    <div className="text_div_p">
        <p className="watchlist_p_text">Watch list</p>
        <p className="watchlist_p_text">Share</p>
    </div>
 
    </div>


    </div>
    
   
   
</div>

        </>
    )
    
}

