import axios from 'axios';
import { PORT } from './update-current-asset';

// 현재 소비내역
export const getConsumptionDetails = async () => {
    const { data } = await axios.get(`http://localhost:${PORT}/consumption-details`);
    console.log(data);
};
