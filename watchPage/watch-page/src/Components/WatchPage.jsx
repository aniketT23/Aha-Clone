
import { useEffect, useState } from "react";
import axios from "axios";
import Cast from "./Cast";
import PopularShows from "./PopularShows";
import Similarity from "./Similarty";
import { MainCont } from "./Watchpage_show_info_title"
import "./WatchPge.css"
import { Episodes } from "./Episodes";
import { useLocation } from "react-router-dom";


export const WatchPage =()=>{
    const [shows,setShows] = useState(false);
    const [castCheck,setcastcheck] = useState(true) 
    const location = useLocation();
    const  id= location.state.id 
    const data_getting =async ()=>{
       console.log(id)
     
        try{
           
            const {data} = await axios.get(`http://localhost:2233/aha/most_watched/${id}`);
       
           if(data.categories==="shows"){
                setShows(true);
                setcastcheck(false);
           }

           
            
        }catch(err){
                alert("Somthing went wrong")
        }
      
    }
    useEffect(()=>{

        data_getting();
    },[id])
   
    return (
        <div >
            <MainCont d_id={id}/> 
            
           
        
            <div className="details_main_div_p">
                    <div className={castCheck===false?"cast_details_div_p details_main_div_p_height":"cast_details_div_p"}>
                        {shows&& <button onClick={()=>{
                               setcastcheck(false)
                         }} className={!castCheck?"cast_movie_p active_border_p":"cast_movie_p"}>Episodes</button>}


                         <button className={castCheck?"cast_movie_p active_border_p":"cast_movie_p"}onClick={()=>{
                               setcastcheck(true)
                         }}>Cast</button>



                         <button className="details_movie_p">Details</button>
                         
                    </div>
                    
                   
                   
                    <div className="divider_p"></div>
                    {shows?castCheck===false?<Episodes id={id} />:<>
                    <Cast id={id}  />
                    </> :<Cast id={id}  />}
                      
                    <Similarity id={id} castCheck={castCheck} />
                   
                    <PopularShows id={id}  castCheck={castCheck} />
                   
              </div> 
           
        </div>
    )
}

