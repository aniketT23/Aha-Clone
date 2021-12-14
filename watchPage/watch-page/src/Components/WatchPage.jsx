
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
     const main_bg = data.main_bg;
   
    return (
        <>
            <div className="main_div_p" style={{backgroungImage:"colorphoto poster without logo final.png"}}>
                <div className="info_cont_p">
                <div>
                    {data.premium&&   <div className="tag_div_p">
                        <img  src={data.tags} alt="tags" /></div>}
             
                <div className="title_p"  >
                <img src={data.title} alt="metaData"/>
                </div>
                <div className="metaData_p">
                    <img src={data.metaData} alt="metaData"/>
                </div>
                <div className="description_title_p">
               {data.description}
                </div>
                <div className="button_box_1P">
                    <button className="triler_button_p" onClick={()=>{console.log("clicked")}}>
                        Play Trailer
                    </button>
                    <button className="strt_p"  >
                    
                    </button>
                </div>
                </div>


                </div>
                
               
               
            </div>
        
        
        </>
    )
}

