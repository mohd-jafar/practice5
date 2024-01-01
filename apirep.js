fetch('https://dummyjson.com/products')
// The fetch function is used to make an HTTP request to the specified URL 'https://dummyjson.com/products'.
// The fetch function returns a Promise. A Promise is an object representing the eventual completion or failure of an asynchronous operation.

.then(respone=>{
    // The first then block is executed when the response is received from the server.
//e.g. one person & bowl

    return respone.json()
    // response.json() is called to extract the JSON data from the response. This method also returns a Promise.

}) 
.then(json=>{
    // The second then block is executed when the JSON data is successfully parsed.
    // The parsed JSON data is logged to the console using console.log(json).


    console.log(json)
})



fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(json => {
    // Display the raw JSON data directly in the body
    document.body.textContent = json;
})
.catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error fetching API data:', error);
});