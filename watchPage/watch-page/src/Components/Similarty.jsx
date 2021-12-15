import "./Similarity.css"
import axios from "axios";
import {useState,useEffect} from "react"
function Similarity({id}){
    const [data,SetData] = useState([]);

    const data_getting =async ()=>{
      
        try{
           
            const {data} = await axios.get(`http://localhost:3001/data/${id}`);
       
            SetData(data.Similar);
            
        }catch(err){
                alert("Somthing went wrong")
        }
      
    }
    useEffect(()=>{
        data_getting()
    })

    return(
        <div>
            <div className="similar_main_div_p">
                <p className="similar_text_p">Similar to this</p>
                <div style={{display:"flex"}}>
                {data.map((el,i)=>{
                    return <div key={i} className="similarity_movie_tile">
                        <img src={el.image} alt="similarity_image" />
                        <p>{el.name}</p>
                    </div>
                })}
                </div>
                
            </div>
        </div>
    )

}

export default Similarity