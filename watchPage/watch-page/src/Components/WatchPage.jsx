import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development"
import { MainCont } from "./Watchpage_show_info_title"
import "./WatchPge.css"
export const WatchPage =()=>{
   const [cast,setCast] = useState([]);
   const getCast = async()=>{
        const {data} = await axios.get("http://localhost:3001/data/1");
        //console.log(data.cast);
        setCast(data.cast)
   }
   useEffect(()=>{
        getCast()
   },[])
   
    return (
        <div>
            <MainCont />   
         
           
        
             <div className="details_main_div_p">
                    <div className="cast_details_div_p">
                         <button className="cast_movie_p">Cast</button>
                         <button className="details_movie_p">Details</button>
                        
                    </div>
                    <div className="divider_p"></div>
                    <div className="cast_image_p">
                            {cast.map((el,i)=>{
                                return <div className="cast_tile_p" key={i}>
                                        <img className="img" src = {el.pic} alt="pic" />
                                        <p className="cast_name_p">
                                            {el.name}
                                        </p>
                                </div>
                            })}
                    </div>
             </div>
        </div>
    )
}

