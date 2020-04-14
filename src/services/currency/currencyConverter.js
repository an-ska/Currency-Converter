export const formatCurrency = amount => amount.toFixed(2);
export const convertCurrency = (amount, rate) => formatCurrency(amount * rate);
