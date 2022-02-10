import axios from 'axios';

const baseUrl = 'http://localhost:5000/api';

export const postRequest = async (url, dataToPost) => {
  try {
    const result = await axios.post(`${baseUrl}/${url}`, dataToPost);

    return result.data;
  } catch (err) {
    throw new Error(err);
  }
};
