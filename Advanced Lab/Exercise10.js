// 10.Fetch is a browser-based function to send a request and receive a response from a server,
// which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status
// code, and returns a promise containing the JSON sent by the remote server if successful
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in the
// comments before the function.)
// a) Write a new version of this function using async/await
// b) Test both functions with valid and invalid URLs
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// using Promise.all to combine the results.

// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'

import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

async function fetchURLDataAsync(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Fetch error: ${error.message}`);
  }
}
fetchURLDataAsync("https://jsonplaceholder.typicode.com/todos/3")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

async function fetchMultipleURLs(urls) {
  try {
    const results = await Promise.all(urls.map(fetchURLDataAsync));
    return results;
  } catch (error) {
    console.error("Error fetching multiple URLs:", error.message);
    return [];
  }
}
const urls = [
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/2",
  // "tthssvs.com",
  // "dq9nni.com",
];
fetchMultipleURLs(urls).then((data) => console.log("Multiple URLs Response:", data));
