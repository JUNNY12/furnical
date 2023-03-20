export function formatPrice(number) {
    const formatter = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
    });
  
    return formatter.format(number);
  }