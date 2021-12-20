import "./Similarity.css"
import axios from "axios";
import {useState,useEffect} from "react";
function Similarity({id,castCheck}){
    const [data,SetData] = useState([]);

    const data_getting =async ()=>{
      
        try{
           
            const {data} = await axios.get(`https://mighty-dawn-13827.herokuapp.com/aha/most_watched/${id}`);
                let temp =[];
                data.similar.map((el,i)=>{
                    if(i<=6){
                        temp.push(el)
                    }
                    return ;
                })
         
            SetData(temp);
            
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
                {data.map((el)=>{
                    return <div key={el._id}  className="similarity_movie_tile">
                        <img src={el.imageurl} alt="similarity_image" />
                        <p>{el.title}!</p>
                    </div>
                })}
                </div>
                
            </div>
   
    )

}

export default Similarity