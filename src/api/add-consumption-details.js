import axios from 'axios';
import { PORT } from './update-current-asset';

/**
 * @params
 * {
 *  id: number,
 *  price: number,
 *  category: string,
 *  fundsAtTheTime: number,
 *  description: string,
 *  createAt: string,
 * }
 */
export const addConsumptionDetail = async (body) => {
    const { data } = await axios.post(`http://localhost:${PORT}/consumption-details`, body);
    return data;
};
