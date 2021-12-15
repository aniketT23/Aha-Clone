
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";
import Cast from "./Cast";
import PopularShows from "./PopularShows";
import Similarity from "./Similarty";
import { MainCont } from "./Watchpage_show_info_title"
import "./WatchPge.css"
import { Episodes } from "./Episodes";

export const WatchPage =({id})=>{
    const [shows,setShows] = useState(false);
    const [castCheck,setcastcheck] = useState(true) 

    const data_getting =async ()=>{
      
        try{
           
            const {data} = await axios.get(`http://localhost:3001/data/${id}`);
       
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
    },[])
   
    return (
        <div>
            <MainCont d_id={id}/>   
         
           
        
             <div className="details_main_div_p">
                    <div className="cast_details_div_p">
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

