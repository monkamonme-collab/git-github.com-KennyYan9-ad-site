export const calculateDogAge = (age: number, size: 'small' | 'medium' | 'large' | 'giant'): number => {
  if (age <= 0) return 0;
  if (age === 1) return size === 'giant' ? 12 : 15;
  if (age === 2) return size === 'giant' ? 22 : 24;

  let increment = 4; // small
  if (size === 'medium') increment = 5;
  else if (size === 'large') increment = 6;
  else if (size === 'giant') increment = 7;

  return 24 + (age - 2) * increment;
};
