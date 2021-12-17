import "./Similarity.css"
import axios from "axios";
import {useState,useEffect} from "react"
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Similarity({id,castCheck}){
    const [data,SetData] = useState([]);
    const history = useHistory();
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
    },[])

    return(
    
            <div className={castCheck===true?"similar_main_div_p":"similar_main_div2_p"}>
                <p className="similar_text_p">Similar to this</p>
                <div style={{display:"flex",width:"95%",marginLeft:"2%"}}>
                {data.map((el,i)=>{
                    return <div key={i} onClick={()=>{
                        history.push({
                            pathname:"/watchpage",
                            state:{
                                id:el.id
                            }
                        })
                    }} className="similarity_movie_tile">
                        <img src={el.image} alt="similarity_image" />
                        <p>{el.name}!</p>
                    </div>
                })}
                </div>
                
            </div>
   
    )

}

export default Similarity