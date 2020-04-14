export const formatCurrency = amount => amount.toFixed(2);
export const convertCurrency = (amount, rate) => formatCurrency(amount * rate);
export const calculateCurrencyDifference = (firstAmount, secondAmount) =>
	formatCurrency(firstAmount - secondAmount);
