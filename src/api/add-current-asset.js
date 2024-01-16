import axios from 'axios';

export const PORT = 3003;

export const addCurrentAsset = async (value) => {
    await axios.post(`http://localhost:${PORT}/current-asset`, {
        price: value,
    });
};
