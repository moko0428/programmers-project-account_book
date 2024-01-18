import { initAddItem } from './add-item.js';
import { initConsumptionDetails } from './consumption-details.js';
import { initCurrentAsset } from './current-asset.js';

const initApp = () => {
    initCurrentAsset();
    initConsumptionDetails();
    initAddItem();
};
initApp();
