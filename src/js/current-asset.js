import { addCurrentAsset } from '../api/add-current-asset';
import { getCurrentAsset } from '../api/get-current-asset';
import { toHidden, toShow } from './util';

const $currentAssetValue = document.querySelector('.current-asset-value');
const $currentAssetLoader = document.querySelector('.current-asset-loader');
const $currentAssetInput = document.querySelector('.current-asset-input');
const $currentAssetButton = document.querySelector('.current-asset-button');
const $currentAssetButtonLoader = document.querySelector('.current-asset-button-loader');
const $addItemButton = document.querySelector('.add-item-button');

export const initCurrentAsset = async () => {
    handleGetCurrentAsset();

    $currentAssetButton.addEventListener('click', function () {
        const inputValue = $currentAssetInput.value;
        if (inputValue > 0) {
            handleAddCurrentAsset();
        } else {
            console.warn('0원 이상 기입해주세요.');
        }
    });
};

const handleAddCurrentAsset = async (inputValue) => {
    toShow($currentAssetButtonLoader);
    toHidden($currentAssetButton);

    await addCurrentAsset(inputValue);
    console.log(inputValue);

    toHidden($currentAssetButtonLoader);
    toShow($currentAssetButton);

    await handleGetCurrentAsset();
};

const handleGetCurrentAsset = async () => {
    // loading true
    toShow($currentAssetLoader);
    try {
        const { price } = await getCurrentAsset();

        if (price > 0) {
            $currentAssetValue.textContent = price;

            toHidden($currentAssetInput);
        } else {
            toShow($currentAssetInput);
            toShow($currentAssetButton);
            toHidden($addItemButton);
        }
    } catch (err) {
        console.error('현재 자산을 조회하는데 실패했습니다.');
    }
    toHidden($currentAssetLoader);

    // 성공/실패 피드백
};
