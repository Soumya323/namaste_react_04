import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    // Using a useState Hook will cause rerender in the parent component where this hook is used
    const [onlineStatus, setOnlineStatus] = useState(true);

    // Using useEffect() because we only want to register for online check events once
    useEffect(() => {
        setupOnlineEventListen();
    }, []);

    const setupOnlineEventListen = () => {
        window.addEventListener('online', () => {
            setOnlineStatus(true);
        });
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        });
    }

    // const setupOnlineEventListen = () => {
    //     window.addEventListener('online', () => onOnlineStatusChanged(true));
    //     window.addEventListener('offline', () => onOnlineStatusChanged(false));
    // }

    // const onOnlineStatusChanged = (status) => {
    //     setOnlineStatus(status);
    // }

    return onlineStatus;
}

export default useOnlineStatus;