import axios from 'axios';
import { PORT } from './add-current-asset';

export const getCurrentAsset = async () => {
    const { data } = await axios.get(`http://localhost:${PORT}/current-asset`);

    return data;
};
