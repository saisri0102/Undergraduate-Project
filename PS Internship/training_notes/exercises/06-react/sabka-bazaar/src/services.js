import axios from 'axios';

async function getBanners() {
    const response = await axios.get( `${process.env.REACT_APP_API_BASE_URL}/banners` );
    return response.data;
}

async function getCategories() {
    const response = await axios.get( `${process.env.REACT_APP_API_BASE_URL}/categories` );
    return response.data;
}

export {
    getBanners,
    getCategories
};