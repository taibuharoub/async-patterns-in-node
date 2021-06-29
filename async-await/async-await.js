async function getData() {
  let rawData = await MethodThatReturnsPromise();

  return JSON.parse(rawData);
}

getData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
