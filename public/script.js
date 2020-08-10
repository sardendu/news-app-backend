// client-side js, loaded by index.html
// run by the browser each time the page is loaded

// define variables that reference elements on our page
const apiList = document.getElementById("apiList");

// a helper function that creates a list item for a given api
function appendNewApi(api) {
  const newListItem = document.createElement("li");
  newListItem.innerText = api;
  apiList.appendChild(newListItem);
}

// fetch the initial list of api
fetch("/availableAPI")
  .then(response => response.json()) // parse the JSON from the server
  .then(api => {
    // iterate through every api list and add it to our page
    api.forEach(appendNewApi);
  });