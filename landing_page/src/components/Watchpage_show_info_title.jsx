import "./MainCont.css";
import { useState, useEffect } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";

export const MainCont = ({ d_id }) => {
  const history = useHistory();
  const [data, setdata] = useState([]);
  const [watchListed, setWatchListed] = useState(null);
  const [w_id, setId] = useState(null);
  
  const data_getting = async () => {
    
    try {
      const { data } = await axios.get(
        `https://mighty-dawn-13827.herokuapp.com/aha/most_watched/${d_id}`
      );

      setdata(data);

    } catch (err) {
      alert("Somthing went wrong");
    }
  };
  const watchListing = async () => {
    try {
      // const loal_data = JSON.parse(localStorage.getItem("watchlist"));

      // const d = [...loal_data, data];
      // localStorage.setItem("watchlist", JSON.stringify(d));
      // setWatchListed(true);
      // 
      const payload = {
        id:data._id
      }
      const watch = await axios.post("http://localhost:2233/aha/watchlist",payload)
      
     setId(watch.data._id);
      // console.log(watch.data,watch.data._id);
      setWatchListed(true);
      alert(`You can watch this show any time now from your watchlist`);
    } catch (err) {
      alert("Somthing went wrong");
    }
  };
  const checking_id = async() => {
    try{
      const id = await axios.get(`https://mighty-dawn-13827.herokuapp.com/aha/watchlist`)
      // console.log(id);
       id.data?.map((el)=>{
         console.log(el)
         if(el.id==data._id){
          setWatchListed(true);
         }
       })
    }catch(err){
      alert("Somthing went wrong");
    }
    
  };
  const handlingDelete = async () => {
    try {
      
     
       const d = await axios.delete(`https://mighty-dawn-13827.herokuapp.com/aha/watchlist/${w_id}`);
      // console.log(d)
       setWatchListed(false);
    } catch (err) {
      alert("Somthing went wrong");
    }
  };
  const check = localStorage.getItem("watchlist");
  useEffect(() => {
    //   console.log("refreshing")

    data_getting();
    checking_id();
  }, [watchListed, check]);
  const main_bg = data.main_bg;
  return (
    <>
      <div
        className="main_div_p"
        style={{
          backgroundImage: `url(${main_bg})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="info_cont_p">
          <div>
            {data.premium && (
              <div className="tag_div_p">
                <img src={data.tags} alt="tags" />
              </div>
            )}

            <img className="title_p" src={data.title} alt="metaData" />

            <div className="metaData_p">
              <img src={data.metaData} alt="metaData" />
            </div>
            <div className="description_title_p">{data.description}</div>
            <div className="button_box_1P">
              <button
                className="triler_button_p"
                onClick={() => {
                  history.push({
                    pathname: "/player",
                    state: {
                      url: "https://www.youtube.com/watch?v=0867JeIfyLY",
                    },
                  });
                }}
              >
                Play Trailer
              </button>
              <button
                className="strt_p"
                onClick={() => {
                  history.push({
                    pathname: "/player",
                    state: {
                      url: "https://www.youtube.com/watch?v=0867JeIfyLY",
                    },
                  });
                }}
              ></button>
            </div>
            <div className="action_p">
              {watchListed !== null && watchListed === true ? (
                <button
                  className="delete_watchlist_button_p"
                  onClick={handlingDelete}
                />
              ) : (
                <button className="watchlist_p" onClick={watchListing} />
              )}

              <button className="share_p" />
            </div>
            <div className="text_div_p">
              <p className="watchlist_p_text">
                {watchListed === true ? "Remove" : "Watch list"}
              </p>
              <p className="watchlist_p_text">Share</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
