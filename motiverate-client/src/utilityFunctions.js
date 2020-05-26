export const formatDateTime = goalDate => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(goalDate).toLocaleDateString(undefined, options);
};