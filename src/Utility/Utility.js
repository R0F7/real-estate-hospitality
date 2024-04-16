import toast from 'react-hot-toast';

const getLocalStorageData = () => {
    let getLSData = localStorage.getItem('userId');
    
    if (getLSData) {
        return JSON.parse(getLSData)
    }
    return [];

}

const setLocalStorageData = (user) => {
    const storeData = getLocalStorageData();
    const exist = storeData.find(data => data.id === user.id)
    
    if (!exist) {
        storeData.push(user)
        toast.success('Add to Bookmark successfully')
        localStorage.setItem('userId',JSON.stringify(storeData))
        return
    }
    toast.error('Already Added')
    
}

const removeLocalStorageData = (user) =>{
    let storeData = getLocalStorageData();
    const newList = storeData.filter( data => data.id !== user.id)
    if (newList) {
        localStorage.setItem('userId',JSON.stringify(newList));
        toast.success('remove successfully')
    }
}

export { getLocalStorageData, setLocalStorageData, removeLocalStorageData }