import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    // Local State Varaible
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const apiURL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

    const fetchData = async () => {
        const data = await fetch(apiURL);

        const json = await data.json();
        let updatedRestaurantsList = json.data.cards;
        // updatedRestaurantsList = updatedRestaurantsList.filter((res) => res.card.card["info"] !== undefined);       // Remove the data which is not valid
        updatedRestaurantsList = updatedRestaurantsList.filter((res) => res.card.card?.info);       // Remove the data which is not valid
        setListOfRestaurants(updatedRestaurantsList);
        setFilteredRestaurants(updatedRestaurantsList);
    }
    console.log("Body rendered");
    useEffect(() => { fetchData(); }, []);


    function FilterRestaurants() {
        const filteredResult = listOfRestaurants.filter((res) => res.card.card.info.avgRating > 4);
        setFilteredRestaurants(filteredResult);
    }

    function GetRestaurantCards() {
        return (
            filteredRestaurants.map((res) =>
                <Link to={"/restaurants/" + res.card.card.info.id} key={res.card.card.info.id} className="res-card-link">
                    <RestaurantCard resData={res} />
                </Link>
            )
        );
    }

    function FilterRestaurantsBySearch() {
        const filteredResult = listOfRestaurants.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurants(filteredResult);
    }

    if (listOfRestaurants.length == 0) {
        return (
            //  <h1>Loading....</h1>
            <Shimmer />
        );
    }

    return (
        listOfRestaurants.length == 0 ? (
            <Shimmer />
        ) : (
            < div className=" body" >
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                        <button onClick={FilterRestaurantsBySearch}>Search</button>
                    </div>
                    <button className="filter-btn" onClick={FilterRestaurants}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="res-container">
                    {GetRestaurantCards()}
                    {/* {showAllestaurants} */}
                </div>
            </div >
        )
    );
}

export default Body;