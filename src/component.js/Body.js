import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = (props) => {
  const { resData } = props;
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log("body rendered");

  const handleClickToRatedRestaurant = () => {
    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
    setFilteredRestaurant(filteredList);
  };

  const handleClearFilter = () => {
    setFilteredRestaurant(originalList);
  };

  const handleSearch = () => {
    const filteredRestaurants = originalList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
   

    setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setOriginalList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  if (listOfRestaurants === null) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-button" onClick={handleClickToRatedRestaurant}>
          TOP RATED RESTAURANT
        </button>
        <button className="clear-filter" onClick={handleClearFilter}>
          Clear Filter
        </button>
      </div>

      <div className="Search">
        <input
          className="search-box"
          type="text"
          value={searchText}
          placeholder="Search for Restaurants"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="res-container">
        {(filteredRestaurant.length > 0 ? filteredRestaurant : listOfRestaurants).map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id }> <RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
