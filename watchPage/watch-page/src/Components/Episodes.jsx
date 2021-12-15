import { useEffect, useState } from "react/cjs/react.development"
import axios from "axios";
import "./Episodes.css"
function PopularShows({id}){
    const [data,setData] = useState([]);
    const data_getting =async ()=>{
      
        try{
           
            const {data} = await axios.get(`http://localhost:3001/data/${id}`);
       
            setData(data.Similar);
            
        }catch(err){
                alert("Somthing went wrong")
        }
      
    }
    useEffect(()=>{
        data_getting();
    },[])

    return (
        <div className="popular_main_div_p">
            <p className="popular_shows_text_p">Popular Shows</p>
            <div className="popularList_div_p">
                {data.map((el,i)=>{
                    return <div key={i} className="popluarShows_tile_p">
                         <img src={el.image} alt="show_img" />
                        <p>{el.name}</p>
                    </div>
                })}
            </div>

        </div>
    )

}

export default PopularShows