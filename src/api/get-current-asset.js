import axios from 'axios';
// import { PORT } from '../../server';

export const getCurrentAsset = async () => {
    const { data } = await axios.get(`http://localhost:3003/current-asset`);
    // console.log(PORT);
    return data;
};
