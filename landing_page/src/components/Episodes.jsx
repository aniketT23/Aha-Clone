import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";
import "./Episodes.css";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
export const Episodes = ({ id }) => {
  const history = useHistory();
  const [d, setData] = useState([]);
  const data_getting = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:2233/aha/most_watched/${id}`
      );

      //console.log(data.episodes);

      setData(data.episodes);
    } catch (err) {
      alert("Somthing went wrong");
    }
  };
  useEffect(() => {
    data_getting();
  }, []);

  return (
    <div className="episode_div_p">
      <div className="season_tag_p"></div>
      <div className="episode_container_p">
        {d.map((el, i) => {
          return (
            <div key={i} className="Episode_List_div">
              <img
                onClick={() => {
                  history.push({
                    pathname: "/player",

                    state: {
                      url: "https://youtu.be/Luq2aEeRoKQ",
                    },
                  });
                }}
                src={el.banner_img}
                alt="banner_logo"
              />
              <div style={{ margin: "0%", padding: "0%", marginTop: "-1%" }}>
                <div className="ep_div">
                  <p className="ep_name_p">{el.ep_title}</p>
                  <div className="ep_duration_div_p">
                    Episode {i + 1} | {el.duration}
                  </div>
                </div>
                <div className="ep_description_div_p">{el.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
