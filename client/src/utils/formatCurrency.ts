export const formatUsd = (value: number): string => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}