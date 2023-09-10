export const calculateAge = () => Math.floor((new Date().getTime() - new Date(1990, 6, 26).getTime()) / (365.25 * 24 * 60 * 60 * 1000));
