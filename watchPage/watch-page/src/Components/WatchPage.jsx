
import Cast from "./Cast";
import { MainCont } from "./Watchpage_show_info_title"
import "./WatchPge.css"
export const WatchPage =()=>{

   
    return (
        <div>
            <MainCont />   
         
           
        
             <div className="details_main_div_p">
                    <div className="cast_details_div_p">
                         <button className="cast_movie_p">Cast</button>
                         <button className="details_movie_p">Details</button>
                        
                    </div>
                    <div className="divider_p"></div>
                    <Cast />
                   
             </div>
        </div>
    )
}

