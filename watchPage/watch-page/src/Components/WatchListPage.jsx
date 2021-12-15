import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState } from "react/cjs/react.development";
import "./WatchListPage.css"
import axios from "axios";
export const WatchList = ()=>{
    const history = useHistory();
    const [data,setdata] = useState([]);
    const checking_id =async ()=>{
        try{
         const {data} = await axios.get("http://localhost:3001/watchList")
        console.log(data)
              setdata(data)
        }catch(err){
         alert("Somthing went wrong")
        }
        
     }
     useEffect(()=>{
            checking_id()
     },[])
    return (
        <div className="main_bg_p">
                <div className="watchlist_button_div_p">
                    <button className="back_button_p" onClick={()=>{history.goBack()}}  />
                       <p className="watch_text_p">Watchlist</p>
                    
                </div>

                <div className="watchlist_item_div_p">
                    {data.map((el)=>{
                        return <div key={el.id} className="watchlist_tile_p" onClick={()=>{
                            history.push({
                                pathname:"/check",
                                state:{
                                    url:`https://youtu.be/GhP35G-HyX4`
                                }
                            })
                        }}>
                                <img src={el.watchlist_tile} alt="img"/>
                                <p>{el.tile_name}</p>
                        </div>
                    })}
                </div>
        </div>
    )
}