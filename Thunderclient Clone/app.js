// Selecting necessary DOM elements
var txtInput = document.querySelector("#urlInput");
var sendBtn = document.querySelector("#sendRequestBtn");
var parameterTxt = document.querySelector("#parameter");
var valueTxt = document.querySelector("#value");
var output = document.querySelector("#output");

// Function to construct the URL for translation request
function getTranslation(id) {
  // Construct the URL with input URL, parameter, and value
  return txtInput.value + "?" + parameterTxt.value + "=" + id;
}

// Event handler for button click
function clickHandler() {
  // Get the value from the input field
  var value = valueTxt.value;
  
  // Construct the URL for translation request
  var url = getTranslation(value);
  
  // Log the constructed URL
  console.log("URL:", url);

  // Fetch data from the constructed URL
  fetch(url)
    .then((response) => {
      // Check if response is okay
      if (!response.ok) {
        // If not okay, throw an error
        throw new Error("Network response was not ok");
      }
      // If response is okay, parse it as JSON
      return response.json();
    })
    .then((data) => {
      // Log the received data to the console
      console.log(data);
      // Display the received data on the webpage
      output.innerHTML = `
        <div>
          <p>ID: ${data.p_id}</p>
          <p>Name: ${data.p_name}</p>
          <p>Description: ${data.p_desc}</p>
          <p>Price: ${data.p_price}</p>
          <p>Stock: ${data.p_stock}</p>
          <img src="${data.p_image}" alt="Product Image" style="max-width: 200px; max-height: 200px;">
        </div>
      `;
    })
    .catch((error) => {
      // Catch and handle any errors that occurred during fetch
      console.error("Error:", error);
    });
}

// Add event listener to the button to trigger clickHandler function on click
sendBtn.addEventListener("click", clickHandler);
