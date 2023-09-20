import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();    // extracts the resId (any params from the route path)

    const resInfo = useRestaurantMenu(resId);


    if (resInfo == null) {
        // If no data is fetched yet then show shimmer UI
        return <Shimmer />
    }

    return (
        <div className="menu">
            <img
                className="info-res-logo"
                alt="info-res-logo"
                src={resInfo?.image}

                style={{ width: "150px", height: "150px", paddingTop: "20px" }}
            />
            <h1>{resInfo?.name}</h1>
            <h3>{resInfo.servesCuisine}</h3>
            <h3>{resInfo.priceRange}</h3>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
}

export default RestaurantMenu;