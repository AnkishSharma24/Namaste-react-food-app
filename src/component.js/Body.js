import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = (props)=> {
    const {resData} = props;
    const [listOfRestaurants, setListOfRestaurants] = useState(null);
    const [originalList, setOriginalList]= useState([]);

    const handleClick = ()=>{
       const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4.3);
        setListOfRestaurants(filteredList);
    };

    const hadleClearFilter = ()=>{
        const clearedFilter = setListOfRestaurants(originalList);
    }

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log( json);

        setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        setOriginalList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }
    if(listOfRestaurants === null) return <Shimmer />


  
    
    return (
        <div className="body">
            <div className="filter">
              <button 
              className="filter-button"
                onClick={handleClick}>
                TOP RATED RESTAURANT
              </button> 
            </div>
            <div className="removeFilter">
            <button 
              className="clear-filter"
                onClick={hadleClearFilter}
              >Clear Filter</button>
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