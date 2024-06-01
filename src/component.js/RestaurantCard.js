import { CDN_URL } from "../../utils/constant";



const RestaurantCard = ({resData}) =>{

    

    return(
        <div className="res-card">                      
                 <img className="res-logo" src={CDN_URL}></img>
                 <h2>{resData.info.name}</h2>
                 <h4>{resData.info.cuisines.join(", ")}</h4>
                 <h4>{resData.info.avgRating}</h4>
                 <h4>{resData.info.costForTwo}</h4>

       </div>
  )
} 

export default RestaurantCard;