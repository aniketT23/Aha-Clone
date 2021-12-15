
import "./MainCont.css";
import {useState,useEffect} from "react"

import axios from "axios"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const MainCont =()=>{
     const history  = useHistory()
    const [data,setdata] = useState([]);
    const [watchListed,setWatchListed] = useState(null);
    const [id,setId] = useState(null)
    const data_getting =async ()=>{
      
        try{
           
            const {data} = await axios.get("http://localhost:3001/data/1");
       
            setdata(data);
            setId(data.id)
        }catch(err){
                alert("Somthing went wrong")
        }
      
    }
    const watchListing  =async ()=>{
       try{
        await axios.post("http://localhost:3001/watchList",data);
        setWatchListed(true)
        alert(`You can watch this show any time now from your watchlist`);
       
       }catch(err){
        alert("Somthing went wrong")
       }
          
    }
    const checking_id =async ()=>{
        console.log("Checking")
       try{
        const {data} = await axios.get("http://localhost:3001/watchList")
        // console.log(data)
               data.map((el)=>{
                 if(el.id===id){
                      
                       setWatchListed(true)
                   }
                  
               })
       }catch(err){
        alert("Somthing went wrong")
       }
       
    }
    const handlingDelete = async()=>{
        try{
            await axios.delete(`http://localhost:3001/watchList/${id}`);
            setWatchListed(false);
        }catch(err){
        alert("Somthing went wrong")
       }
           
    }
    useEffect(()=>{
     //   console.log("refreshing")
       data_getting()
        checking_id()
     },[watchListed])
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
        {watchListed!==null&&watchListed===true?<button className="delete_watchlist_button_p" onClick={handlingDelete} />: <button className="watchlist_p" onClick={watchListing} />}
           
            
            <button className="share_p" />
    </div>
    <div className="text_div_p">
        <p className="watchlist_p_text">{watchListed===true?"Remove":"Watch list"}</p>
        <p className="watchlist_p_text">Share</p>
    </div>
 
    </div>


    </div>
    
   
   
</div>

        </>
    )
    
}

