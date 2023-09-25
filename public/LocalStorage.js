const getLocalStoredObj = () => {
  const storedObjJSON = localStorage.getItem("donations");
  if (storedObjJSON) {
    const storedObj = JSON.parse(storedObjJSON);
    return storedObj;
  }
  return [];
};
const setLocalStoredObj = (id) => {
  const object = getLocalStoredObj();
  const check = object.find((i) => parseInt(i) === parseInt(id));
  if (check) {
    return 0;
  }
  object.push(id);
  localStorage.setItem("donations", JSON.stringify(object));
  return 1;
};

export { getLocalStoredObj, setLocalStoredObj };
