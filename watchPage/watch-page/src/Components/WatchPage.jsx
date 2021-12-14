
import "./WatchPage.css";
import {useState,useEffect} from "react"
import axios from "axios"

export const WatchPage =()=>{
    
    const [data,setdata] = useState([]);
    const data_getting =async ()=>{
        const {data} = await axios.get("http://localhost:3001/data");
        console.log(data)
        setdata(data)
    }
    useEffect(()=>{
       data_getting()
        
     },[])
    return (
        <>
            <div className="main_div_p">
                <div className="info_cont_p">
                <div>
                    {data.premium&&   <div className="tag_div_p"></div>}
             
                <div className="title_p"  >
                </div>
                <div className="metaData_p">
                    <img src={"data.metaData"} alt="metaData"/>
                </div>
                <div className="description_title_p">
               {data.description}
                </div>
                <div className="button_box_1P">
                    <button className="triler_button_p">
                        Play Trailer
                    </button>
                    <button className="strt_p">
                     
                    </button>
                </div>
                </div>


                </div>
                
               
               
            </div>
        
        
        </>
    )
}

