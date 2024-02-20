var txtInput = document.querySelector("#urlInput");
var sendBtn = document.querySelector("#sendRequestBtn");
var parameterTxt = document.querySelector("#parameter");
var valueTxt = document.querySelector("#value");

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
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

sendBtn.addEventListener("click", handleClick);
