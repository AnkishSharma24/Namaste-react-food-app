import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = ()=>{
    const [resInfo, setResInfo]= useState(null);
    const {resId}= useParams();

    useEffect(()=>{
            fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);

        setResInfo(json.data)
    }

    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwo} = resInfo.cards[2].card.card.info;
    const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return(
        <div>
            <h1>{name}</h1>
            <p>
            {cuisines.join(", ")} - {  "Cost for two Rs " +  costForTwo/100 }
            </p>
            <ul>
                {itemCards.map(menu=> 
                <li key={menu.card?.info?.id}>  {menu.card?.info?.name } - Rs.{(menu.card?.info?.defaultPrice)/100 || (menu.card?.info?.price)/100}</li>)}
                {/* <li>{itemCards[0]?.card?.info?.name}</li>
                <li>{itemCards[1]?.card?.info?.name}</li>
                <li>{itemCards[2]?.card?.info?.name}</li> */}
            </ul>
        </div>
    )
}

export default RestaurantMenu;