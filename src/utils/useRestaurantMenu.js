import { useEffect, useState } from "react"
import dummyRestaurantDetail from "./mockDataRestaurantDetail";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // The swiggy hotel menu api don't work so using mock data
        // const data = await fetch("https://www.swiggy.com/mapitmenu/wpage-type=REGULAR_MENU&complete-menu=true&lat=28.4089123&Ing=77.3177894&restaurantld=42620&submitAction=ENTER");
        // const json = await data.json;
        // setResInfo(json.data);

        setResInfo(dummyRestaurantDetail);
    }

    return resInfo;
}

export default useRestaurantMenu;