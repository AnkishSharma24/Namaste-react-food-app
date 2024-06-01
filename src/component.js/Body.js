import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = (props)=> {
    const {resData} = props;
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log( json);

        setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        
  }
    
    return (
        <div className="body">
            <div className="filter">
              <button 
              className="filter-button"
                onClick={()=>console.log("button clicked")}
              >
                TOP RATED RESTAURANT
              </button>
            </div>
            <div className="Search">Search</div>
            
            <div className="res-container">
            {listOfRestaurants.map((restaurant) =>
            
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              
          )} 
            </div>

        </div>
    )
}

export default Body;