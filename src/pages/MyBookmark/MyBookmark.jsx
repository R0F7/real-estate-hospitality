import { useState } from "react";
import { getLocalStorageData, removeLocalStorageData } from "../../Utility/Utility";
import { useEffect } from "react";
import BookingTemplate from "../../components/BookmarkTemplate";
import EmptyState from "../../components/EmptyState/EmptyState";
import { Helmet } from 'react-helmet-async';

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

    if (userData.length < 1) return (
        <>
            <Helmet>
                <title>Hospitality Haven | Bookmark</title>
            </Helmet>
            
            <EmptyState message='No Bookmarks Available!' address={'/'} label={'Go To Home'}></EmptyState>
        </>
    )

    return (
        <div>
            <Helmet>
                <title>Hospitality Haven | Bookmark</title>
            </Helmet>
            {
                userData.map(data => <BookingTemplate key={data.id} handleRemove={handleRemove} data={data}></BookingTemplate>)
            }
        </div>
    );
};

export default MyBookings;