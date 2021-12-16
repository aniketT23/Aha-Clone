import { useEffect, useState } from "react/cjs/react.development"
import axios from "axios";
import "./PopularShows.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function PopularShows({id,castCheck}){
    const [data,setData] = useState([]);
    const history  = useHistory()
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
    },[id])

    return (
        <div className={castCheck==true?"popular_main_div_p":"popular_main_div2_p"}>
            <p className="popular_shows_text_p">Popular Shows</p>
            <div className="popularList_div_p">
                {data.map((el,i)=>{
                    return <div key={i} onClick={()=>{
                        history.push({
                            pathname:"/watchpage",
                            state:{
                                id:el.id
                            }
                        })
                    }}className="popluarShows_tile_p">
                         <img src={el.image} alt="show_img" />
                        <p>{el.name}</p>
                    </div>
                })}
            </div>

        </div>
    )

}

export default PopularShows