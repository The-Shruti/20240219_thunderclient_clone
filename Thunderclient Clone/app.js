var txtInput = document.querySelector("#urlInput");
var sendBtn = document.querySelector("#sendRequestBtn");
var parameterTxt = document.querySelector("#parameter");
var valueTxt = document.querySelector("#value"); 
var output = document.querySelector("#output");

function getURLWithParameters() {
  var url = txtInput.value;
  var parameter = parameterTxt.value;
  var value = valueTxt.value;
  
  if (parameter && value) {
    return `${url}?${parameter}=${value}`;
  } else {
    return url;
  }
}

function handleClick() {
  var url = getURLWithParameters();
  console.log("URL:", url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => { 
      // Sort the users array by user ID in ascending order
      data.sort((a, b) => a.id - b.id);

      // Display the sorted user data
      output.innerHTML = ''; // Clear previous data
      data.forEach(user => {
        output.innerHTML += `<div>ID: ${user.id}, Name: ${user.name}, Email: ${user.email}</div>`;
      });
    })
    .catch((error) => console.error("Error:", error));
} 

sendBtn.addEventListener("click", handleClick);
