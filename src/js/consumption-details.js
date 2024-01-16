import { getConsumptionDetails } from '../api/get-consumption-details.js';
import { toHidden, toShow } from './util.js';

const $consumptionDetailsLoader = document.querySelector('.consumptionDetailsLoader');
export const initConsumptionDetails = () => {
    handleGetConsumptionDetails();
};

export const handleGetConsumptionDetails = async () => {
    toShow($consumptionDetailsLoader);
    await getConsumptionDetails();
    toHidden($consumptionDetailsLoader);
};
