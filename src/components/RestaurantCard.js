import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    // const { resData } = props;     // Destructing of JS Object
    const resData = props.resData.card.card;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resData?.info;

    return (
        <div className="res-card">
            <div className="res-logo-container">
                <img
                    className="res-logo"
                    alt="res-logo"
                    src={CDN_URL + cloudinaryImageId}
                />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{resData.info.sla.deliveryTime}min Delivery Time</h4>
        </div>
    );
}

export default RestaurantCard;