const fetchPromise = fetch(
    "https://www.javascripttutorial.net/sample/promise/api.json"
);

fetchPromise.then((response) => {
    response.json().then((data) => console.log(data));
});
