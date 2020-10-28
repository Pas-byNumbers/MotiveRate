export const formatDateTime = goalDate => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(goalDate).toLocaleDateString(undefined, options);
};

export const removeItemOnce = (arr, value) => {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export const capitalizeString = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
 }