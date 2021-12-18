import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react";
import "./WatchListPage.css"

export const WatchList = ()=>{
    const history = useHistory();
    const [data,setdata] = useState([]);
    const checking_id =async ()=>{
       const d2 = JSON.parse(localStorage.getItem("watchlist"))
       console.log(d2)
        setdata(d2)
     }
     useEffect(()=>{
            checking_id()
     },[])
    return (
        <div className="main_bg_p">
                <div className="watchlist_button_div_p">
                    <button className="back_button_p" onClick={()=>{history.goBack()}}  />
                       <p className="watch_text_p" onClick={()=>{
                           history.push({
                               pathname:"/watchpage"
                             
                           })
                       }}>Watchlist</p>
                    
                </div>

                <div className="watchlist_item_div_p">
                    {data?.map((el)=>{
                        return <div key={el._id} className="watchlist_tile_p" onClick={()=>{
                            history.push({
                                pathname:"/watchpage",
                                state:{
                                    id:el._id
                                }
                            })
                        }}>
                                <img src={el.main_bg} alt="main_bg"/>
                                <p>{el.tile_name}</p>
                        </div>
                    })}
                </div>
        </div>
    )
}