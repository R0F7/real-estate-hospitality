import { useState } from "react";
import { getLocalStorageData, removeLocalStorageData } from "../../Utility/Utility";
import { useEffect } from "react";
import BookingTemplate from "../../components/BookmarkTemplate";
import EmptyState from "../../components/EmptyState/EmptyState";

const MyBookings = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const storeData = getLocalStorageData('user');
        setUserData(storeData);

    }, []);
    // console.log(userData);

    const handleRemove = (data) => {
        removeLocalStorageData(data);
        const storeData = getLocalStorageData();
        setUserData(storeData)
    }

    if (userData.length < 1) return <EmptyState message='No Bookmarks Available!' address={'/'} label={'Go To Home'}></EmptyState>

    return (
        <div>
            {
                userData.map(data => <BookingTemplate key={data.id} handleRemove = {handleRemove} data={data}></BookingTemplate>)
            }
        </div>
    );
};

export default MyBookings;