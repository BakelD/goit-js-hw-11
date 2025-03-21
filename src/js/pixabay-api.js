import axios from 'axios';

const API_KEY = '27888525-8999ed18604edf74585499e22';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    return axios.get('', { params: searchParams });
  } catch (error) {
    console.log(error.message);
  }
};
