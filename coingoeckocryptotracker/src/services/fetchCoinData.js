import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData(page = 1, currency) {
    const perPage = 20;
    try {
        const response = await axiosInstance.get('/coins/markets?vs_currency=usd');
        return response.data;

    } catch(error) {
        console.error(error);
        return null;
    }
}