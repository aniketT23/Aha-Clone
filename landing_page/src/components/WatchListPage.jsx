import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react";
import "./WatchListPage.css"
import axios from "axios";
export const WatchList = ()=>{
    const history = useHistory();
    const [data,setdata] = useState([]);
    const handle_single=async(id)=>{
        try{
           
            const s= await axios.get(`https://mighty-dawn-13827.herokuapp.com/aha/watchlist/${id}`);
           // console.log(s.data,"s")
           let d= [...data,s.data[0]];
           setdata(d)
            return s.data[0];
        }catch(err){
            alert ( "something went wrong ")
        }
    }
    const checking_id =async ()=>{
       try{
        const id = await axios.get(`https://mighty-dawn-13827.herokuapp.com/aha/watchlist`);
       // console.log(id.data)
        const d = await id.data?.map((el)=>{
         //   console.log(el.id)
         if(!data.includes(el.id[0])){
           const s =  handle_single(el.id[0]);
           return s;
        }
          // console.log(s)
         
        })
     // console.log(data)
       // setdata(d)
       }catch(err){
        alert ( "something went wrong ")
       }
        
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