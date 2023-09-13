import restaurantsList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    // let showAllestaurants = restaurantsList.map((restaurant) => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />);

    // Local State Varaible
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantsList);  // This is also a array destructuring

    // const arr = useState(restaurantsList);
    // const [listOfRestaurants, setListOfRestaurants] = arr;
    // // const listOfRestaurants = arr[0];
    // // const setListOfRestaurants = arr[1];


    function FilterRestaurants() {
        const filteredRestaurants = restaurantsList.filter((res) => res.card.card.info.avgRating > 4);
        setListOfRestaurants(filteredRestaurants);
    }

    function GetRestaurantCards() {
        return (
            listOfRestaurants.map((res) => <RestaurantCard key={res.card.card.info.id} resData={res} />)
        );
    }

    return (
        <div className=" body">
            <div className="filter">
                <button className="filter-btn" onClick={FilterRestaurants}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {GetRestaurantCards()}
                {/* {showAllestaurants} */}
            </div>
        </div>
    );
}

export default Body;