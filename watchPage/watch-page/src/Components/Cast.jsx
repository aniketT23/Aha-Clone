import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react/cjs/react.development"

import "./WatchPge.css"

function Cast ({id}){
    const [cast,setCast] = useState([]);
    const getCast = async()=>{
         const {data} = await axios.get(`http://localhost:3001/data/${id}`);
         //console.log(data.cast);
         setCast(data.cast)
    }
    useEffect(()=>{
         getCast()
    },[])
return (
   
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
   
)
}

export default Cast