import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./WatchListPage.css"

export const WatchList = ()=>{
    const history = useHistory()
    return (
        <div className="main_bg_p">
                <div className="watchlist_button_div_p">
                    <button className="back_button_p" onClick={()=>{history.goBack()}}  />
                       <p className="watch_text_p">Watchlist</p>
                    
                </div>

                <div style={{display:"flex"}}>
                        
                </div>
        </div>
    )
}