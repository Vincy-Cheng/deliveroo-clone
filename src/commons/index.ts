export const format = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'HKD',
    maximumFractionDigits: 0
  }).format(price);
};
