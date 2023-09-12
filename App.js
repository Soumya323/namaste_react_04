import React from "react"
import ReactDOM from "react-dom/client"
import restaurantsList from "./public/restaurants-list";

/*
Header
    - Logo
    - Nav Items
Body
    - Search
    - RestaurantContainer
        - RestaurantCard
            - img
            - Name of Res, Start Rating, cuisine, delivery time
Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo-thumbnail.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}


const Body = () => {

    const showRestaurants = restaurantsList.map((restaurant) => {
        return (
            <RestaurantCard resData={restaurant} />
        );
    });

    return (
        <div className=" body">
            <div className="search">Search</div>
            <div className="res-container">
                {showRestaurants}
                {/* <RestaurantCard resData={restaurantsList[0]} />
                <RestaurantCard resData={restaurantsList[1]} /> */}
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {

    // const { resData } = props;     // Destructing of JS Object
    const resData = props.resData.card.card;

    return (
        <div className="res-card">
            <div className="res-logo-container">
                <img
                    className="res-logo"
                    alt="res-logo"
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}
                />
            </div>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.avgRating} Rating</h4>
            <h4>{resData.info.sla.deliveryTime}min Delivery Time</h4>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


const resObjMeghana = {

    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
        "id": "342547",
        "name": "Meghana Foods",
        "cloudinaryImageId": "iivuhjc2mswi9lublktf",
        "locality": "BHEL layout",
        "areaName": "Rajarajeshwari Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Biryani",
            "Andhra",
            "South Indian"
        ],
        "avgRating": 4.4,
        "feeDetails": {
            "restaurantId": "342547",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 4500
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 4500
        },
        "parentId": "635",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 4.3,
            "serviceability": "SERVICEABLE",
            "slaString": "32 mins",
            "lastMileTravelString": "4.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-09-13 00:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textExtendedBadges": {},
                "textBased": {}
            }
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=342547&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
}

const resObjNandhana = {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
        "id": "61136",
        "name": "Nandhana Palace",
        "cloudinaryImageId": "0387817e239462fcfb98a1f568fa1a76",
        "locality": "Vijayanagar",
        "areaName": "Nagarbhavi",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Biryani",
            "Andhra",
            "South Indian",
            "North Indian"
        ],
        "avgRating": 4.2,
        "feeDetails": {
            "restaurantId": "61136",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3500
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3500
        },
        "parentId": "2120",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "21 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-09-13 01:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=61136&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
}


