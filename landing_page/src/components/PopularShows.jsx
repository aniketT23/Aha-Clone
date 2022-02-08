import { useEffect, useState } from "react"
import axios from "axios";
import "./PopularShows.css"

function PopularShows({id,castCheck}){
    const [data,setData] = useState([]);
   
    const data_getting =async ()=>{
      
        try{
           
            const {data} = await axios.get(`https://mighty-dawn-13827.herokuapp.com/aha/most_watched`);
            let temp =[]
                data.map((el,i)=>{
                    if(i<=6){
                        temp.push(el)
                    }
                    return ;
                })
            setData(temp);
            
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
                {data.map((el)=>{
                    return <div key={el._id} className="popluarShows_tile_p">
                         <img src={el.imageurl} alt="show_img" />
                        <p>{el.title}</p>
                    </div>
                })}
               
            </div>
           
          
        </div>
    )

}

export default PopularShows